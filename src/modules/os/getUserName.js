import { userInfo } from 'os';

const getUsername = () =>
    console.log(`System user name: ${userInfo().username}`);

export default getUsername;
