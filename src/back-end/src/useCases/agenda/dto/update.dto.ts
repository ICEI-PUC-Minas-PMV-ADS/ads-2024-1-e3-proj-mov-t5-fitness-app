import { IAgendaEntity } from '../entities/agenda.entity';

export type IUpdateAgendaDto = Omit<IAgendaEntity, 'user'>;

export type IUpdateAgendaRes = IAgendaEntity;
