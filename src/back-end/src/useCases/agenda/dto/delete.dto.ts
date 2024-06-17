import { IAgendaEntity } from '../entities/agenda.entity';

export type IDeleteAgendaDto = Pick<IAgendaEntity, 'id'>;

export type IDeleteAgendaResDto = IAgendaEntity;
