import { createWriteStream } from 'node:fs';
import { INVALID_INPUT_MESSAGE } from '../../utils/constants.js';

const createFile = async (path) => {
    if (!path) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    return new Promise((resolve, reject) => {
        const stream = createWriteStream(path, { flags: 'wx' });

        stream.on('error', (error) => reject(error));
        stream.on('finish', () => resolve('File has been created'));
        stream.close();
    });
};

export default createFile;
