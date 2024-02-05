import copyFile from './copyFile.js';
import deleteFile from './deleteFile.js';

const moveFile = async (pathToFile, pathToNewDir) => {
    await copyFile(pathToFile, pathToNewDir);
    await deleteFile(pathToFile);
};

export default moveFile;
