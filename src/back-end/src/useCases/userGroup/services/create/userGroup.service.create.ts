import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { UserGroupRepositoryPrismaService } from 'src/repositoryQueries/userGroup/prisma';
import { Messages } from 'src/shared/Services';
import { Statuscode } from 'src/shared/interfaces';
import { TypeError } from 'src/shared/interfaces/TypeErrors';
import { ICreateUserGroupDto, ICreateUserGroupRes } from '../../dto';

@Injectable()
export class UserGroupCreateService {
    constructor(
        private userGroupRepositoryQueries: UserGroupRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async create({
        name,
    }: ICreateUserGroupDto): Promise<
        Either<ParametersError, ParametersSuccess<ICreateUserGroupRes>>
    > {
        try {
            const userGroupAlreadyExist =
                await this.userGroupRepositoryQueries.alreadyExist({ name });

            if (userGroupAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorUpdatedUser,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            const newUserGroup = await this.userGroupRepositoryQueries.create({
                name,
            });

            if (!newUserGroup)
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
                    newUserGroup,
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
