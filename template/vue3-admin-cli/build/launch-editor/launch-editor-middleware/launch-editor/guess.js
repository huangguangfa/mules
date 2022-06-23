import path from 'path'
import shellQuote from 'shell-quote'
import childProcess from 'child_process'

// Map from full process name to binary that starts the process
// We can't just re-use full process name, because it will spawn a new instance
// of the app every time
import COMMON_EDITORS_OSX from './editor-info/osx'
import COMMON_EDITORS_LINUX from './editor-info/linux'
import COMMON_EDITORS_WIN from './editor-info/windows'

export default function guessEditor(specifiedEditor) {
  if (specifiedEditor) {
    return shellQuote.parse(specifiedEditor)
  }
  // We can find out which editor is currently running by:
  // `ps x` on macOS and Linux
  // `Get-Process` on Windows
  try {
    // eslint-disable-next-line no-undef
    if (process.platform === 'darwin') {
      const output = childProcess.execSync('ps x').toString()
      const processNames = Object.keys(COMMON_EDITORS_OSX)
      for (let i = 0; i < processNames.length; i++) {
        const processName = processNames[i]
        if (output.indexOf(processName) !== -1) {
          return [COMMON_EDITORS_OSX[processName]]
        }
      }
      // eslint-disable-next-line no-undef
    } else if (process.platform === 'win32') {
      const output = childProcess
        .execSync('powershell -Command "Get-Process | Select-Object Path"', {
          stdio: ['pipe', 'pipe', 'ignore'],
        })
        .toString()
      const runningProcesses = output.split('\r\n')
      for (let i = 0; i < runningProcesses.length; i++) {
        // `Get-Process` sometimes returns empty lines
        if (!runningProcesses[i]) {
          continue
        }

        const fullProcessPath = runningProcesses[i].trim()
        const shortProcessName = path.basename(fullProcessPath)

        if (COMMON_EDITORS_WIN.indexOf(shortProcessName) !== -1) {
          return [fullProcessPath]
        }
      }
      // eslint-disable-next-line no-undef
    } else if (process.platform === 'linux') {
      // --no-heading No header line
      // x List all processes owned by you
      // -o comm Need only names column
      const output = childProcess.execSync('ps x --no-heading -o comm --sort=comm').toString()
      const processNames = Object.keys(COMMON_EDITORS_LINUX)
      for (let i = 0; i < processNames.length; i++) {
        const processName = processNames[i]
        if (output.indexOf(processName) !== -1) {
          return [COMMON_EDITORS_LINUX[processName]]
        }
      }
    }
  } catch (error) {
    // Ignore...
  }

  // Last resort, use old skool env vars
  // eslint-disable-next-line no-undef
  if (process.env.VISUAL) {
    // eslint-disable-next-line no-undef
    return [process.env.VISUAL]
    // eslint-disable-next-line no-undef
  } else if (process.env.EDITOR) {
    // eslint-disable-next-line no-undef
    return [process.env.EDITOR]
  }

  return [null]
}
