import getEOL from './getEOL.js';
import getCPUS from './getCPUS.js';
import getHomeDir from './getHomedir.js';
import getUserName from './getUserName.js';
import getArchitecture from './getArchitecture.js';

const customOS = (arg) => {
    switch (arg) {
        case '--EOL':
            getEOL();
            break;

        case '--cpus':
            getCPUS();
            break;

        case '--homedir':
            getHomeDir();
            break;

        case '--username':
            getUserName();
            break;

        case '--architecture':
            getArchitecture();
            break;
    }
};

export default customOS;
