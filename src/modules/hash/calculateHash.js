import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async (pathToFile) => {
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
