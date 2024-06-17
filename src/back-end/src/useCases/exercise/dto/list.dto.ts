import { Optional } from '@prisma/client/runtime/library';
import { IPaginationOffSetProps } from 'src/shared/interfaces/IPaginationProps';
import { IExerciseEntity } from '../entities/exercise.entity';

export type IListExerciseDto = Optional<IPaginationOffSetProps>;

export type IListExerciseRes = IExerciseEntity;
