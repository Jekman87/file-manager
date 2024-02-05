import { argv } from 'node:process';
import { DEFAULT_USER_NAME, USER_NAME_KEY } from './constants.js';
import { EOL } from 'node:os';

export const getUserName = () =>
    argv
        .find((a) => a.startsWith(USER_NAME_KEY))
        ?.split(USER_NAME_KEY)
        .pop() ?? DEFAULT_USER_NAME;

export const printHelloMessage = (userName) =>
    console.log(`Welcome to the File Manager, ${userName}!`);

export const printByeMessage = (userName) =>
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);

export const printCWD = (cwd) =>
    console.log(`${EOL}You are currently in ${cwd}`);
