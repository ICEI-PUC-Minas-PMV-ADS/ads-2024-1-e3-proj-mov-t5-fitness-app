import { IPaginationResponse } from 'src/shared/interfaces';

import {
    ICreateUserDto,
    ICreateUserRes,
    IDeleteUserDto,
    IDeleteUserRes,
    IListOneUserDto,
    IListOneUserRes,
    IListUserDto,
    IListUserRes,
    IUpdateUserDto,
    IUpdateUserRes,
} from 'src/useCases/user/dto';

export interface IUserRepositoryQueries {
    create({ email, name, password }: ICreateUserDto): Promise<ICreateUserRes>;

    update({
        id,
        email,
        name,
        password,
    }: IUpdateUserDto): Promise<IUpdateUserRes>;

    delete({ id }: IDeleteUserDto): Promise<IDeleteUserRes>;

    list({
        itemsPerPage,
        itemsToSkip,
    }: IListUserDto): Promise<IPaginationResponse<IListUserRes>>;

    listOne({ id }: IListOneUserDto): Promise<IListOneUserRes>;
}
