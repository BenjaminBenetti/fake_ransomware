import fs from 'fs';
import os from 'os';
import path from 'path';

// style imports
import './index.scss';

const terminal = document.querySelector("#side-terminal .terminal-text");

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function encryptHomeDir()
{
  listFilesToTerminalRecursive(await fs.promises.opendir(os.homedir()));
}

async function listFilesToTerminalRecursive(dir: fs.Dir)
{
  const files = [];
  for await (const dirent of dir) {
    terminal.innerHTML += `<div>${dirent.name}</div>`;
    files.push(dirent);

    if (dirent.isFile())
    {
      const stats = await fs.promises.stat(path.join(dir.path, dirent.name));
      await sleep(Math.min(stats.size/8192, 20000));
    }
    else
    {
      await sleep(100);
    }
  }

  const directories = files.filter((dirent) => dirent.isDirectory());
  for (const dirent of directories)
  {
    await listFilesToTerminalRecursive(await fs.promises.opendir(path.join(dir.path, dirent.name)));
  }
}

encryptHomeDir();
