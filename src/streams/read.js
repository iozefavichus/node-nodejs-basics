import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readableStream = createReadStream(filePath);

  await pipeline(readableStream, process.stdout);
};

await read();