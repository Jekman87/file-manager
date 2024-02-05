import { argv, cwd } from 'node:process';
import { DEFAULT_USER_NAME, USER_NAME_KEY } from './constants.js';
import { EOL } from 'node:os';
import { parse } from 'node:path';

export const getUserName = () =>
    argv
        .find((a) => a.startsWith(USER_NAME_KEY))
        ?.split(USER_NAME_KEY)
        .pop() ?? DEFAULT_USER_NAME;

export const printHelloMessage = (userName) =>
    console.log(`Welcome to the File Manager, ${userName}!`);

export const printByeMessage = (userName) =>
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);

export const printCWD = () =>
    console.log(`${EOL}You are currently in ${cwd()}`);

export const printInvalidInputMessage = () => console.log('Invalid input');

export const printFailMessage = () => console.log('Operation failed');

export const getRootPath = (filename) => parse(filename).root;
