const content = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(filePath, content, { flag: 'wx' })
      } catch (error) {
            throw new Error('FS operation failed');
      }
};

await create();