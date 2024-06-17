import { $Enums } from '@prisma/client';
import { IAgendaEntity } from '../entities/agenda.entity';

export interface IListDayAgendaDto {
    day: $Enums.DaysOfWeek;
}

export type IListDayAgendaRes = IAgendaEntity;

export const DaysOfWeek = $Enums.DaysOfWeek;
