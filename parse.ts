import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve, basename } from 'path';
import { mkdirpSync } from 'fs-extra';

const { argv: [ , , input ] } = process

const output = resolve('./out', basename(input))

const saveTo = (fileName, obj) => {
  writeFileSync(resolve(output, fileName), JSON.stringify(obj, null, 2))
}

interface IBaseFile { preferences_: string }
interface IProgressionFile { [k: string]: any }

const parseProgressionFile = (blob: string) => {
  const base: IBaseFile = JSON.parse(
    Buffer.from(blob, 'base64').toString('utf8')
  )

  const preferences = JSON.parse(base.preferences_)

  saveTo('preferences.json', preferences)

  const ua = JSON.parse(base['ua.json'])

  saveTo('ua.json', ua)

  const up = JSON.parse(base['up.json'])

  saveTo('up.json', up)

  const fws = JSON.parse(base['fws.json'])

  saveTo('fws.json', fws)
}



try { mkdirpSync(output) } catch {}

parseProgressionFile(readFileSync(resolve(__dirname, input), 'utf8'))
