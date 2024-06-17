import { IPaginationResponse } from 'src/shared/interfaces';

import {
    IAlreadyExistAgendaDto,
    ICreateAgendaDto,
    ICreateAgendaRes,
    IDeleteAgendaDto,
    IListAgendaDto,
    IListAgendaRes,
    IListOneAgendaDto,
    IListOneAgendaRes,
    IUpdateAgendaDto,
    IUpdateAgendaRes,
} from 'src/useCases/agenda/dto';
import { IAgendaEntity } from 'src/useCases/agenda/entities/agenda.entity';

export interface IAgendaRepositoryQueries {
    create({
        days,
        exercises,
        userId,
    }: ICreateAgendaDto): Promise<ICreateAgendaRes>;

    update({
        id,
        days,
        exercises,
        userId,
    }: IUpdateAgendaDto): Promise<IUpdateAgendaRes>;

    delete({ id }: IDeleteAgendaDto): Promise<IAgendaEntity>;

    list({
        itemsPerPage,
        itemsToSkip,
    }: IListAgendaDto): Promise<IPaginationResponse<IListAgendaRes>>;

    listOne({ id }: IListOneAgendaDto): Promise<IListOneAgendaRes>;

    alreadyExist({ id, userId }: IAlreadyExistAgendaDto): Promise<boolean>;
}
