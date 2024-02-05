import { chdir } from 'node:process';
import { INVALID_INPUT_MESSAGE } from '../../utils/constants.js';

const cd = (newPath) => {
    if (!newPath) {
        throw new Error(INVALID_INPUT_MESSAGE);
    }

    chdir(newPath);
};

export default cd;
