import { argv, cwd } from 'node:process';
import { DEFAULT_USER_NAME, USER_NAME_KEY } from './constants.js';
import { EOL } from 'node:os';
import { access, constants } from 'node:fs/promises';

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

export const getRootPath = (filename) => parse(filename).root;

export const getFilename = (filename) => parse(filename).base;

export const isFileExists = async (path) => {
    try {
        await access(path, constants.F_OK);

        return true;
    } catch (err) {
        return false;
    }
};
