import { $Enums } from '@prisma/client';
import { IAgendaEntity } from '../entities/agenda.entity';

export interface IUpdateAgendaDto
    extends Omit<IAgendaEntity, 'user' | 'days' | 'exercises'> {
    days: $Enums.DaysOfWeek[];
    exercises?: {
        id: number;
    }[];
}

export type IUpdateAgendaRes = IAgendaEntity;
