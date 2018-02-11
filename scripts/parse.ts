import { readFileSync, writeFileSync } from 'fs';
import { mkdirpSync } from 'fs-extra';
import { basename, extname, resolve } from 'path';

import { ProgressionParser } from '../src/ProgressionParser';

const getInputName = (inputName) => {
  inputName = basename(inputName);
  inputName = inputName.replace(extname(inputName), '');
  inputName = inputName.replace(/\.parsed/, '');

  return inputName;
};

const save = (fileName, val) => {
  if (typeof val !== 'string') { val = JSON.stringify(val, null, 2); }

  writeFileSync(resolve(outputPath, fileName), val);
};

const { argv: [, , inputFilePath] } = process;

const name = getInputName(inputFilePath);
const outputPath = resolve(__dirname, '../out', name);

try { mkdirpSync(outputPath); } catch { /* */ }

const file = readFileSync(resolve(__dirname, '..', inputFilePath), 'utf8');

const parser = new ProgressionParser();

parser.decode(file);

save(`${name}.parsed.json`, parser);
save(name, parser.encode());
