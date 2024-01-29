import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(filePath, { flags: 'a' });

  await pipeline(process.stdin, writableStream);
};

await write();