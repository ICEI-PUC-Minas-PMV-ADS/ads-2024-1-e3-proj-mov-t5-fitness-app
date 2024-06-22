import { IPaginationResponse } from 'src/shared/interfaces';

import {
    IAlreadyExistAgendaDto,
    ICreateAgendaRepositoryDto,
    ICreateAgendaRes,
    IDeleteAgendaDto,
    IListAgendaDto,
    IListAgendaRes,
    IListDayAgendaDto,
    IListDayAgendaRes,
    IListOneAgendaDto,
    IListOneAgendaRes,
} from 'src/useCases/agenda/dto';
import { IAgendaEntity } from 'src/useCases/agenda/entities/agenda.entity';

export interface IAgendaRepositoryQueries {
    create({
        day,
        exercises,
        userId,
    }: ICreateAgendaRepositoryDto): Promise<ICreateAgendaRes>;

    delete({ id }: IDeleteAgendaDto): Promise<IAgendaEntity>;

    list({
        itemsPerPage,
        itemsToSkip,
    }: IListAgendaDto): Promise<IPaginationResponse<IListAgendaRes>>;

    listOne({ id }: IListOneAgendaDto): Promise<IListOneAgendaRes[]>;

    listDay({ day }: IListDayAgendaDto): Promise<IListDayAgendaRes>;

    alreadyExist({ id, userId }: IAlreadyExistAgendaDto): Promise<boolean>;
}
