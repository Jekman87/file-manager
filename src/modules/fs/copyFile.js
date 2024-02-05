import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { getFilename, isFileExists } from '../../utils/helpers.js';
import {
    INVALID_INPUT_MESSAGE,
    OPERATION_FAILED_MESSAGE,
} from '../../utils/constants.js';

const copyFile = async (pathToFile, pathToNewDir) => {
    if (!pathToFile || !pathToNewDir) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    const filename = getFilename(pathToFile);
    const newFilePath = join(pathToNewDir, filename);

    if (!(await isFileExists(pathToFile)) || (await isFileExists(newFilePath)))
        throw new Error(OPERATION_FAILED_MESSAGE);

    const input = createReadStream(pathToFile);
    const output = createWriteStream(newFilePath);

    await pipeline(input, output);
};

export default copyFile;
