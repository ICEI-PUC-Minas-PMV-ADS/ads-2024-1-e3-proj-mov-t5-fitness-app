import { IPaginationResponse } from 'src/shared/interfaces';

import {
    IAlreadyExistUserGroupDto,
    ICreateUserGroupDto,
    ICreateUserGroupRes,
    IDeleteUserGroupDto,
    IDeleteUserGroupRes,
    IListOneUserGroupDto,
    IListOneUserGroupRes,
    IListUserGroupDto,
    IListUserGroupRes,
    IUpdateUserGroupDto,
    IUpdateUserGroupRes,
} from 'src/useCases/userGroup/dto';

export interface IUserGroupRepositoryQueries {
    create({ name }: ICreateUserGroupDto): Promise<ICreateUserGroupRes>;

    update({ id, name }: IUpdateUserGroupDto): Promise<IUpdateUserGroupRes>;

    delete({ id }: IDeleteUserGroupDto): Promise<IDeleteUserGroupRes>;

    list({
        itemsPerPage,
        itemsToSkip,
    }: IListUserGroupDto): Promise<IPaginationResponse<IListUserGroupRes>>;

    listOne({ id }: IListOneUserGroupDto): Promise<IListOneUserGroupRes>;

    alreadyExist({ name, id }: IAlreadyExistUserGroupDto): Promise<boolean>;
}
