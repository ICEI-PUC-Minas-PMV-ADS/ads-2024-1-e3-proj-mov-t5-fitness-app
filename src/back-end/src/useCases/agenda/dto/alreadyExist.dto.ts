import { Optional } from '@prisma/client/runtime/library';
import { IAgendaEntity } from '../entities/agenda.entity';

export type IAlreadyExistAgendaDto = Optional<
    Pick<IAgendaEntity, 'id' | 'userId'>
>;
