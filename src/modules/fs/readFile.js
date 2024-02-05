import { createReadStream } from 'node:fs';
import { isFileExists } from '../../utils/helpers.js';
import {
    INVALID_INPUT_MESSAGE,
    OPERATION_FAILED_MESSAGE,
} from '../../utils/constants.js';

const readFile = async (pathToFile) => {
    if (!pathToFile) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    if (!(await isFileExists(pathToFile)))
        throw new Error(OPERATION_FAILED_MESSAGE);

    return new Promise((resolve, reject) => {
        const stream = createReadStream(pathToFile, { encoding: 'utf-8' });

        stream.on('error', (error) => reject(error));
        stream.on('data', (data) => {
            console.log(data);
        });
        stream.on('close', () => resolve());
    });
};

export default readFile;
