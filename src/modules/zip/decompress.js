import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { isFileExists } from '../../utils/helpers.js';
import {
    INVALID_INPUT_MESSAGE,
    OPERATION_FAILED_MESSAGE,
} from '../../utils/constants.js';

const decompress = async (pathToFile, pathToDestination) => {
    if (!pathToFile || !pathToDestination) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    if (
        !(await isFileExists(pathToFile)) ||
        (await isFileExists(pathToDestination))
    )
        throw new Error(OPERATION_FAILED_MESSAGE);

    await pipeline(
        createReadStream(pathToFile),
        createBrotliDecompress(),
        createWriteStream(pathToDestination, { flags: 'wx' })
    );
};

export default decompress;
