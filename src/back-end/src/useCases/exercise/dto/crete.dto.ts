import { IExerciseEntity } from '../entities/exercise.entity';

export type ICreateExerciseDto = Omit<IExerciseEntity, 'id' | 'agenda'>;

export type ICreateExerciseRes = IExerciseEntity;
