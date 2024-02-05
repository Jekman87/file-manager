import { rm } from 'node:fs/promises';
import { INVALID_INPUT_MESSAGE } from '../../utils/constants.js';

const deleteFile = async (pathToFile) => {
    if (!pathToFile) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    await rm(pathToFile);
};

export default deleteFile;
