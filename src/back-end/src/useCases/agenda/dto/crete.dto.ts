import { IAgendaEntity } from '../entities/agenda.entity';

export interface ICreateAgendaDto
    extends Omit<IAgendaEntity, 'id' | 'exercises' | 'user'> {
    exercises?: {
        id: number;
    }[];
}

export type ICreateAgendaRes = IAgendaEntity;
