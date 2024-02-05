import { rename } from 'fs/promises';
import { INVALID_INPUT_MESSAGE } from '../../utils/constants.js';

const renameFile = async (pathToFile, newFileName) => {
    if (!pathToFile || !newFileName) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    await rename(pathToFile, newFileName);
};

export default renameFile;
