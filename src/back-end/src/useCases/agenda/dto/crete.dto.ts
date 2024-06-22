import { $Enums } from '@prisma/client';
import { IAgendaEntity } from '../entities/agenda.entity';

export interface ICreateAgendaDto
    extends Omit<IAgendaEntity, 'id' | 'exercises' | 'user' | 'days'> {
    days: $Enums.DaysOfWeek[];
    exercises?: {
        id: number;
    }[];
}

export interface ICreateAgendaRepositoryDto
    extends Omit<IAgendaEntity, 'id' | 'exercises' | 'user' | 'days'> {
    day: $Enums.DaysOfWeek;
    exercises?: {
        id: number;
    }[];
}

export type ICreateAgendaRes = IAgendaEntity;
