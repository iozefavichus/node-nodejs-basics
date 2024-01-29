import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  const readableStream = createReadStream(archivePath);
  const writableStream = createWriteStream(filePath);
  const gunzip = createGunzip();

  await pipeline(readableStream, gunzip, writableStream);
};

await decompress();