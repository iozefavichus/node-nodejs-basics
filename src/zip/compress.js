import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readableStream = createReadStream(filePath);
  const writableStream = createWriteStream(archivePath);
  const gzip = createGzip();

  await pipeline(readableStream, gzip, writableStream);
};

await compress();