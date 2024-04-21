import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { UserRepositoryPrismaService } from 'src/repositoryQueries/user/prisma';
import { Messages } from 'src/shared/Services';
import { Statuscode } from 'src/shared/interfaces';
import { TypeError } from 'src/shared/interfaces/TypeErrors';
import { IListOneUserDto, IListOneUserRes } from '../../dto';

@Injectable()
export class UserListOneService {
    constructor(
        private userRepositoryQueries: UserRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listOne({
        id,
    }: IListOneUserDto): Promise<
        Either<ParametersError, ParametersSuccess<IListOneUserRes>>
    > {
        try {
            const user = await this.userRepositoryQueries.listOne({
                id,
            });

            if (!user.id)
                return error(
                    new ParametersError(
                        this.messages.language().errorListUser,
                        Statuscode.BAD_REQUEST,
                        TypeError.BAD_REQUEST,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successListUser,
                    Statuscode.OK,
                    user,
                ),
            );
        } catch (error) {
            console.log(error);
            return error(
                new ParametersError(
                    this.messages.language().internalServerError,
                    Statuscode.INTERNAL_SERVER_ERROR,
                    TypeError.INTERNAL_SERVER_ERROR,
                    error,
                ),
            );
        }
    }
}
