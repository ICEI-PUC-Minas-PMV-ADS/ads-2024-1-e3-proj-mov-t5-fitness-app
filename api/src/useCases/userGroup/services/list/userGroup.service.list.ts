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
import { IListUserGroupDto, IListUserGroupRes } from '../../dto';

@Injectable()
export class UserGroupListAllService {
    constructor(
        private userGroupRepositoryQueries: UserGroupRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listAll({
        itemsPerPage,
        itemsToSkip,
    }: IListUserGroupDto): Promise<
        Either<ParametersError, ParametersSuccess<Array<IListUserGroupRes>>>
    > {
        try {
            const { data: userGroups, meta } =
                await this.userGroupRepositoryQueries.list({
                    itemsPerPage,
                    itemsToSkip,
                });

            if (userGroups.length < 1)
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
                    userGroups,
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
