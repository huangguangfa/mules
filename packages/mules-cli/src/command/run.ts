import { exec, spawn } from 'child_process';

function run(scriptName: string) {
  if (!scriptName) return;
  console.log(process.platform);
  // exec('nvm ls', (error, stdout) => {
  //   if (error) {
  //     console.error(`error: ${error}`);
  //     return;
  //   }
  //   console.log(`stdout ${stdout}`);
  // });

  const subprocess = spawn('nvm', ['ls'], {
    stdio: 'inherit',
  });
  subprocess.on('data', data => {
    console.log(`Received chunk ${data}`);
  });
}

export { run };
