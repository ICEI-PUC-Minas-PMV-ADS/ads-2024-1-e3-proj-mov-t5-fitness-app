import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { UserRepositoryPrismaService } from 'src/repositoryQueries/user/prisma';
import { UserGroupRepositoryPrismaService } from 'src/repositoryQueries/userGroup/prisma';
import { Messages } from 'src/shared/Services';
import { HandlePassword } from 'src/shared/Services/HandlePassword';
import { Statuscode } from 'src/shared/interfaces';
import { TypeError } from 'src/shared/interfaces/TypeErrors';
import { ICreateUserDto, ICreateUserRes } from '../../dto';

@Injectable()
export class UserCreateService {
    constructor(
        private userRepositoryQueries: UserRepositoryPrismaService,
        private userGroupRepositoryQueries: UserGroupRepositoryPrismaService,
        private handlePassword: HandlePassword,
        private messages: Messages,
    ) {}

    async create({
        name,
        email,
        password,
        userGroupId,
    }: ICreateUserDto): Promise<
        Either<ParametersError, ParametersSuccess<ICreateUserRes>>
    > {
        try {
            const userAlreadyExist =
                await this.userRepositoryQueries.alreadyExist({ email });

            if (userAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorUserAlreadyExist,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            password = await this.handlePassword.generateHash(password);

            const defaultUserGroup =
                await this.userGroupRepositoryQueries.listOne({ name: 'User' });

            const newUser = await this.userRepositoryQueries.create({
                email,
                name,
                password,
                userGroupId: userGroupId || defaultUserGroup.id,
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
