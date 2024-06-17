import { Optional } from '@prisma/client/runtime/library';
import { IExerciseEntity } from '../entities/exercise.entity';

export type IAlreadyExistExerciseDto = Optional<
    Pick<IExerciseEntity, 'id' | 'name'>
>;
