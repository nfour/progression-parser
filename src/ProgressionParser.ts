import { ICustomActivity, IPreferences, IProgressionsFile, IWorkout, IWorkoutHistory } from './types';

export class ProgressionParser {
  preferences: IPreferences;
  customActivities: ICustomActivity[];
  workouts: IWorkout[];
  history: IWorkoutHistory[];

  decode (encodedFile: string) {
    const base: IProgressionsFile = JSON.parse(
      Buffer.from(encodedFile, 'base64').toString('utf8'),
    );

    this.preferences = JSON.parse(base.preferences_);
    this.customActivities = JSON.parse(base['ua.json']);
    this.workouts = JSON.parse(base['up.json']);
    this.history = JSON.parse(base['fws.json']);
  }

  encode (): string {
    const base: IProgressionsFile = {
      'preferences_': JSON.stringify(this.preferences),
      'ua.json': JSON.stringify(this.customActivities),
      'up.json': JSON.stringify(this.workouts),
      'fws.json': JSON.stringify(this.history),
    };

    return new Buffer(JSON.stringify(base)).toString('base64');
  }

  toJSON () {
    return {
      preferences: this.preferences,
      customActivities: this.customActivities,
      workouts: this.workouts,
      history: this.history,
    };
  }
}
