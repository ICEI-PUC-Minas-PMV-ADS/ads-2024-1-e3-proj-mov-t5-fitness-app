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
import { IUpdateUserGroupDto, IUpdateUserGroupRes } from '../../dto';

@Injectable()
export class UserGroupUpdateService {
    constructor(
        private userGroupRepositoryQueries: UserGroupRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async update({
        id,
        name,
    }: IUpdateUserGroupDto): Promise<
        Either<ParametersError, ParametersSuccess<IUpdateUserGroupRes>>
    > {
        try {
            const userGroupAlreadyExist =
                await this.userGroupRepositoryQueries.alreadyExist({
                    id,
                    name,
                });

            if (!userGroupAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorUserNotExist,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            const userGroupUpdated =
                await this.userGroupRepositoryQueries.update({
                    id,
                    name,
                });

            if (!userGroupUpdated)
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
                    userGroupUpdated,
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
