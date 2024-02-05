import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { isFileExists } from '../../utils/helpers.js';
import { INVALID_INPUT_MESSAGE, OPERATION_FAILED_MESSAGE } from '../../utils/constants.js';

const calculateHash = async (pathToFile) => {
    if (!pathToFile) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    if (!(await isFileExists(pathToFile))) throw new Error(OPERATION_FAILED_MESSAGE);

    return await new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const stream = createReadStream(pathToFile);

        stream.on('error', (err) => reject(err));
        stream.on('data', (chunk) => hash.update(chunk));
        stream.on('end', () => {
            console.log(hash.digest('hex'));
            resolve();
        });
    });
};

export default calculateHash;
