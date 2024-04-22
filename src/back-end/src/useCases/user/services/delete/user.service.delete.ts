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
import { IDeleteUserDto, IDeleteUserRes } from '../../dto';

@Injectable()
export class UserDeletedService {
    constructor(
        private userRepositoryQueries: UserRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async delete({
        id,
    }: IDeleteUserDto): Promise<
        Either<ParametersError, ParametersSuccess<IDeleteUserRes>>
    > {
        try {
            const userDeleted = await this.userRepositoryQueries.delete({
                id,
            });

            if (!userDeleted)
                return error(
                    new ParametersError(
                        this.messages.language().errorDeletedUser,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successDeletedUser,
                    Statuscode.OK,
                    userDeleted,
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
