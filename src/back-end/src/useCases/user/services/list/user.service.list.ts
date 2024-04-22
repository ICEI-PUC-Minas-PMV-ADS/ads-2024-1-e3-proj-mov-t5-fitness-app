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
import { IListUserDto, IListUserRes } from '../../dto';

@Injectable()
export class UserListAllService {
    constructor(
        private userRepositoryQueries: UserRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listAll({
        itemsPerPage,
        itemsToSkip,
    }: IListUserDto): Promise<
        Either<ParametersError, ParametersSuccess<Array<IListUserRes>>>
    > {
        try {
            const { data: users, meta } = await this.userRepositoryQueries.list(
                {
                    itemsPerPage,
                    itemsToSkip,
                },
            );

            if (users.length < 1)
                return error(
                    new ParametersError(
                        this.messages.language().errorListUserAll,
                        Statuscode.NO_CONTENT,
                        TypeError.NO_CONTENT,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successListUserAll,
                    Statuscode.OK,
                    users,
                    meta,
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
