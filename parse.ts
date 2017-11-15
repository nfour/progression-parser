import { readFileSync, writeFileSync, mkdirSync } from "fs";

const _dir = console.dir
console.dir = (v, o = {}) => _dir(v, { depth: 10, colors: true, ...o })

const saveTo = (to, obj) => {
  writeFileSync(`./out/${to}`, JSON.stringify(obj, null, 2))
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

try { mkdirSync('./out') } catch {}

parseProgressionFile(readFileSync('./prog', 'utf8'))

// console.dir(file)
