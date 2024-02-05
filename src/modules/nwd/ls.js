import { cwd } from 'node:process';
import { readdir } from 'node:fs/promises';

const ls = async () => {
    const allFiles = await readdir(cwd(), {
        withFileTypes: true,
    });

    const sortedFiles = allFiles.sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
    );

    const dirs = [];
    const files = [];

    sortedFiles.forEach((file) => {
        if (file.isDirectory()) {
            dirs.push({ Name: file.name, Type: 'directory' });
        } else if (file.isFile()) {
            files.push({ Name: file.name, Type: 'file' });
        }
    });

    console.table([...dirs, ...files]);
};

export default ls;
