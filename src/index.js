import readline from 'node:readline/promises';
import { stdin, stdout, chdir } from 'node:process';
import { homedir } from 'node:os';
import {
    getUserName,
    printByeMessage,
    printCWD,
    printFailMessage,
    printHelloMessage,
    printInvalidInputMessage,
} from './utils/helpers.js';
import up from './modules/nwd/up.js';
import cd from './modules/nwd/cd.js';
import ls from './modules/nwd/ls.js';
import readFile from './modules/fs/readFile.js';
import createFile from './modules/fs/createFile.js';
import renameFile from './modules/fs/renameFile.js';
import copyFile from './modules/fs/copyFile.js';
import moveFile from './modules/fs/moveFile.js';
import deleteFile from './modules/fs/deleteFile.js';
import customOS from './modules/os/index.js';
import calculateHash from './modules/hash/calculateHash.js';

const userName = getUserName();
chdir(homedir());

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
    prompt: '> ',
});

printHelloMessage(userName);
printCWD();
rl.prompt();

rl.on('line', async (line) => {
    const [command, ...args] = line.trim().split(' ');

    try {
        switch (command) {
            case 'hello':
                console.log('world!');
                break;

            case 'up':
                up();
                break;

            case 'cd':
                cd(args[0]);
                break;

            case 'ls':
                await ls();
                break;

            case 'cat':
                await readFile(args[0]);
                break;

            case 'add':
                await createFile(args[0]);
                break;

            case 'rn':
                await renameFile(args[0], args[1]);
                break;

            case 'cp':
                await copyFile(args[0], args[1]);
                break;

            case 'mv':
                await moveFile(args[0], args[1]);
                break;

            case 'rm':
                await deleteFile(args[0]);
                break;

            case 'os':
                customOS(args[0]);
                break;

            case 'hash':
                await calculateHash(args[0]);
                break;

            case '.exit':
                rl.close();
                break;

            default:
                printInvalidInputMessage();
                break;
        }
    } catch (e) {
        console.log(e);
        // printFailMessage();
    }

    printCWD();
    rl.prompt();
}).on('close', () => {
    printByeMessage(userName);
    process.exit(0);
});
