import { chdir } from 'node:process';

const cd = (newPath) => {
    chdir(newPath);
};

export default cd;
