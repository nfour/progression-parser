/** From .preferences_ */
export interface IPreferences {
  auto_input: boolean;
  show_exercise_images: boolean;
  download_exercise_images_over_mobile: boolean;
  rest_timer_sound: boolean;
  mute: boolean;
  fullscreen: boolean;
  pref_keep_screen_on: boolean;
  pref_exercises_list_sort_option: number;
  pref_exercise_statistics_list_sort_option: number;
  analytics: boolean;
}

/** From .[ua.json] */
export interface ICustomExercisesEntry {
  custom: true;
  id: string;
  instructions: string;
  name: string;
  equipment: number;
  mainTargetMuscle: number;
  secondaryTargetMuscles: number[];
  type: number;
}

/** From .[up.json] */
export interface IWorkout {
  /** Date.now() */
  createdTime: string;
  id: string;
  name: string;
  upcomingDayIndex: 1;
  days: IWorkoutDay[];
}

export interface IWorkoutDay {
  index: number;
  name: string;
  type: number;
  activities: IWorkoutActivity[];
}

export interface IWorkoutActivity {
  '@type': string;
  custom: boolean;
  id: string;
  instructions: string;
  name: string;
  equipment: number;
  mainTargetMuscle: number;
  secondaryTargetMuscles: number[];
  type: number;
}

export interface IActivityPerformanceTarget {
  groupIndex: number;
  note: string;
  parameters: IPerformanceTargetParam[];
  restPerSet: number;
}

export interface IPerformanceTargetParam {
  allOut: boolean;
  index: number;
  mark: number;
  maxReps: number;
  minReps: number;
}

export interface IWorkoutHistory {
  endTime: number;
  id: string;
  name: string;
  programDayIndex: number;
  programId: string;
  startTime: number;
  activities: IHistoricActivity[];
}

export interface IHistoricActivity {
  '@type': string;
  custom: false;
  id: string;
  name: string;
  equipment: number;
  mainTargetMuscle: number;
  type: number;
  performance: IHistoricPerformance;
  performanceTarget: IActivityPerformanceTarget;
}

export interface IHistoricPerformance {
  completedSets: IHistoricSet[];
}

export interface IHistoricSet {
  completedAt: number;
  duration: number;
  mark: number;
  reps: number;
  weight: number;
}
