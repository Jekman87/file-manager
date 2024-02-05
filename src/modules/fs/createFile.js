import { createWriteStream } from 'node:fs';

const createFile = async (path) => {
    return new Promise((resolve, reject) => {
        const stream = createWriteStream(path);

        stream.on('error', (error) => reject(error));
        stream.on('finish', () => resolve('File has been created'));
        stream.close();
    });
};

export default createFile;
