import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { getFilename } from '../../utils/helpers.js';

const copyFile = async (pathToFile, pathToNewDir) => {
    const filename = getFilename(pathToFile);
    const newFilePath = join(pathToNewDir, filename);

    const input = createReadStream(pathToFile);
    const output = createWriteStream(newFilePath);

    await pipeline(input, output);
};

export default copyFile;
