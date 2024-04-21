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
import { IUpdateUserDto, IUpdateUserRes } from '../../dto';

@Injectable()
export class UserUpdateService {
    constructor(
        private userRepositoryQueries: UserRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async update({
        id,
        name,
        email,
        password,
    }: IUpdateUserDto): Promise<
        Either<ParametersError, ParametersSuccess<IUpdateUserRes>>
    > {
        try {
            const userUpdated = await this.userRepositoryQueries.update({
                id,
                name,
                email,
                password,
            });

            if (!userUpdated)
                return error(
                    new ParametersError(
                        this.messages.language().errorUpdatedUser,
                        Statuscode.BAD_REQUEST,
                        TypeError.BAD_REQUEST,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successUpdatedUser,
                    Statuscode.OK,
                    userUpdated,
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
