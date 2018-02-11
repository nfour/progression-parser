import { readFileSync, writeFileSync } from 'fs';
import { mkdirpSync } from 'fs-extra';
import { basename, resolve } from 'path';

import { ProgressionParser } from '../src/ProgressionParser';

const { argv: [, , input] } = process;

const inputFile = basename(input);

const output = resolve(__dirname, '../out', inputFile);

const save = (fileName, val) => {
  if (typeof val !== 'string') { val = JSON.stringify(val, null, 2); }

  writeFileSync(resolve(output, fileName), val);
};

try { mkdirpSync(output); } catch {}

const file = readFileSync(resolve(__dirname, '..', input), 'utf8');

const parser = new ProgressionParser();

parser.decode(file);

save(`${inputFile}.parsed.json`, parser);
save(inputFile, parser.encode());
