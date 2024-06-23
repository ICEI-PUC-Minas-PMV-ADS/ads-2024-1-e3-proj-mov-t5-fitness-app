import { Optional } from '@prisma/client/runtime/library';
import { IAgendaEntity } from '../entities/agenda.entity';

export type IListOneAgendaDto = Optional<Pick<IAgendaEntity, 'id' | 'userId'>>;

export type IListOneAgendaRes = IAgendaEntity;
