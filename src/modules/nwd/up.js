import { cwd, chdir } from 'node:process';
import { getRootPath } from '../../utils/helpers.js';

const up = () => {
    const currentDir = cwd();

    if (getRootPath(currentDir) === currentDir) {
        chdir(cwd());
    } else {
        chdir('../');
    }
};

export default up;
