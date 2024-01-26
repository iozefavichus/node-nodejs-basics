import { mkdir, readdir, copyFile, access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourcePath = join(__dirname, 'files');
const targetPath = join(__dirname, 'files_copy');

const isExists = async (path) => {
    try {
      await access(path, constants.F_OK);
      return true;
    } catch (error) {
      return false;
    }
  };

const copy = async () => {
    console.log(sourcePath);
    console.log(await isExists(sourcePath));
    console.log(targetPath);
    console.log(await isExists(targetPath));
	if (!(await isExists(sourcePath)) || await isExists(targetPath)) {
    throw new Error('FS operation failed');
  }

	try {
		const files = await readdir(sourcePath);

		await mkdir(targetPath);

		await Promise.all(files.map(async (file) => {
			const source = join(sourcePath, file);
			const target = join(targetPath, file);

			await copyFile(source, target);
		}));

	} catch (error) {
		throw new Error('FS operation failed');
  }
};

await copy();