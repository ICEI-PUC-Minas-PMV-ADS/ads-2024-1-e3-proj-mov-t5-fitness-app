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
import { IDeleteUserGroupDto, IDeleteUserGroupRes } from '../../dto';

@Injectable()
export class UserGroupDeletedService {
    constructor(
        private userGroupRepositoryQueries: UserGroupRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async delete({
        id,
    }: IDeleteUserGroupDto): Promise<
        Either<ParametersError, ParametersSuccess<IDeleteUserGroupRes>>
    > {
        try {
            const userGroupDeleted =
                await this.userGroupRepositoryQueries.delete({
                    id,
                });

            if (!userGroupDeleted)
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
                    userGroupDeleted,
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
