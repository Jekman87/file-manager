import { cpus, EOL } from 'os';

const getCPUS = () => {
    const myCpus = cpus();

    console.log(`Overall amount of CPUS: ${myCpus.length}${EOL}`);
    console.table(
        myCpus.map(({ model, speed }) => ({
            model: model.trim(),
            'clock rate': `${(speed / 1000).toFixed(2)} GHz`,
        }))
    );
};

export default getCPUS;
