import { Agenda, Exercise, User } from '@prisma/client';

export interface IAgendaEntity extends Omit<Agenda, 'createdAt' | 'updatedAt'> {
    exercises: Exercise[];
    user: User;
    createdAt?: Date;
    updatedAt?: Date;
}
