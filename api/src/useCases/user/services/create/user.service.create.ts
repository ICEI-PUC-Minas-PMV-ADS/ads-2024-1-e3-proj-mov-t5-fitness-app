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
import { ICreateUserDto, ICreateUserRes } from '../../dto';

@Injectable()
export class UserCreateService {
    constructor(
        private userRepositoryQueries: UserRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async create({
        name,
        email,
        password,
    }: ICreateUserDto): Promise<
        Either<ParametersError, ParametersSuccess<ICreateUserRes>>
    > {
        try {
            const newUser = await this.userRepositoryQueries.create({
                email,
                name,
                password,
            });

            if (!newUser)
                return error(
                    new ParametersError(
                        this.messages.language().errorCreatedUser,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successCreatedUser,
                    Statuscode.CREATED,
                    newUser,
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
