import { readFileSync, writeFileSync } from 'fs';
import { mkdirpSync } from 'fs-extra';
import { basename, resolve } from 'path';

import { ProgressionParser } from '../src/ProgressionParser';

const { argv: [, , input] } = process;

const output = resolve('./out', basename(input));

const save = (fileName, obj) => {
  writeFileSync(resolve(output, fileName), JSON.stringify(obj, null, 2));
};

try { mkdirpSync(output); } catch {}

const file = readFileSync(resolve(__dirname, input), 'utf8');

const parser = new ProgressionParser();

parser.decode(file);

save('preferences.json', parser.preferences);
save('customActivities.json', parser.customActivities);
save('workouts.json', parser.workouts);
save('history.json', parser.history);

save(input, parser.encode());
