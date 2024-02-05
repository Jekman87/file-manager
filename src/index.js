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
            case '.exit':
                rl.close();
                break;
            default:
                printInvalidInputMessage();
                break;
        }
    } catch (e) {
        console.log(e)
        // printFailMessage();
    }

    printCWD();
    rl.prompt();
}).on('close', () => {
    printByeMessage(userName);
    process.exit(0);
});
