import { IExerciseEntity } from '../entities/exercise.entity';

export type IUpdateExerciseDto = Omit<IExerciseEntity, 'agenda'>;

export type IUpdateExerciseRes = IExerciseEntity;
