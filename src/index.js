import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { homedir } from 'os';
import {
    getUserName,
    printByeMessage,
    printCWD,
    printHelloMessage,
} from './utils/helpers.js';

const userName = getUserName();
const homeDir = homedir();

printHelloMessage(userName);
printCWD(homeDir);
rl.prompt();

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
    prompt: '> ',
});

rl.on('line', async (line) => {
    const [command, ...args] = line.trim().split(' ');

    switch (command) {
        case 'hello':
            console.log('world!');
            break;
        case '.exit':
            rl.close();
            break;
        default:
            console.log(`Error input`);
            break;
    }

    printCWD(homeDir);
    rl.prompt();
}).on('close', () => {
    printByeMessage(userName);
    process.exit(0);
});
