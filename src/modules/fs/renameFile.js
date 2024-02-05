import { rename } from 'fs/promises';

const renameFile = async (pathToFile, newFileName) => {
    await rename(pathToFile, newFileName);
};

export default renameFile;
