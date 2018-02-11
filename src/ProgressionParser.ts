import { IPreferences } from './types';

interface IBaseFile { preferences_: string; }
interface IProgressionFile { [k: string]: any; }

export class ProgressionParser {
  preferences: IPreferences;

  constructor ()    {

  }

  parse (encodedFile: string) {
    const base: IBaseFile = JSON.parse(
      Buffer.from(encodedFile, 'base64').toString('utf8'),
    );

    const preferences = JSON.parse(base.preferences_);

    saveTo('preferences.json', preferences);

    const ua = JSON.parse(base['ua.json']);

    saveTo('ua.json', ua);

    const up = JSON.parse(base['up.json']);

    saveTo('up.json', up);

    const fws = JSON.parse(base['fws.json']);

    saveTo('fws.json', fws);
  }

}
