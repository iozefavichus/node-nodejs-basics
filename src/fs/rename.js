import { rename as renameFile, access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldFilePath = join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = join(__dirname, 'files', 'properFilename.md');

const isExists = async (path) => {
    try {
      await access(path, constants.F_OK);
      return true;
    } catch (error) {
      return false;
    }
  };

const rename = async () => {
	if (!(await isExists(oldFilePath)) || await isExists(newFilePath)) {
    throw new Error('FS operation failed');
  }

  try {
		await renameFile(oldFilePath, newFilePath);
	} catch (error) {
		throw new Error('FS operation failed');
  }
};

await rename();