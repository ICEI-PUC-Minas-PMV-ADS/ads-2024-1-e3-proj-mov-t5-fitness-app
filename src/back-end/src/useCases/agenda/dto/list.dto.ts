import { Optional } from '@prisma/client/runtime/library';
import { IPaginationOffSetProps } from 'src/shared/interfaces/IPaginationProps';
import { IAgendaEntity } from '../entities/agenda.entity';

export type IListAgendaDto = Optional<IPaginationOffSetProps>;

export type IListAgendaRes = IAgendaEntity;
