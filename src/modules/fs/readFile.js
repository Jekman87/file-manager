import { createReadStream } from 'node:fs';

const readFile = async (path) => {
    return new Promise((resolve, reject) => {
        const stream = createReadStream(path, { encoding: 'utf-8' });

        stream.on('error', (error) => reject(error));
        stream.on('data', (data) => {
            console.log(data);
        });
        stream.on('close', () => resolve());
    });
};

export default readFile;
