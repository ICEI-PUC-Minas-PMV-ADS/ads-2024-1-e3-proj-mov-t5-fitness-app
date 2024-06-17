import { IAgendaEntity } from '../entities/agenda.entity';

export type IListOneAgendaDto = Pick<IAgendaEntity, 'id'>;

export type IListOneAgendaRes = IAgendaEntity;
