import { writeFile,access} from 'fs';

const  create = async () => {
    access('./basics/src/fs/files/fresh.txt', (check) => {
        if (check) {
            writeFile('./basics/src/fs/files/fresh.txt', 'I am fresh and young', () => {});
        } else {
            console.log(Error('FS operation failed'));
        }
    })
};

await create();