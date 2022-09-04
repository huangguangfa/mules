import { exec, spawn } from 'child_process';

function run(scriptName: string) {
  if (!scriptName) return;
  //   exec('pnpm v', (error, stdout) => {
  //     if (error) {
  //       console.error(`exec error: ${error}`);
  //       return;
  //     }
  //     console.log(`stdout: ${stdout}`);
  //   });
  const subprocess = spawn('pnpm v');

  subprocess.stdout.on('data', data => {
    console.log(`Received chunk ${data}`);
  });
}

export { run };
