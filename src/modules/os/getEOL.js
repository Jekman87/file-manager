import { EOL } from 'node:os';

const getEOL = () =>
    console.log(
        `Default system End-Of-Line: ${JSON.stringify(EOL)}`
    );

export default getEOL;
