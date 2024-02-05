import { arch } from 'node:process';

const getArchitecture = () => console.log(`CPU architecture: ${arch}`);

export default getArchitecture;
