import { Agenda, Exercise } from '@prisma/client';

export interface IExerciseEntity
    extends Omit<Exercise, 'createdAt' | 'updatedAt'> {
    agenda?: Agenda[];
    createdAt?: Date;
    updatedAt?: Date;
}
