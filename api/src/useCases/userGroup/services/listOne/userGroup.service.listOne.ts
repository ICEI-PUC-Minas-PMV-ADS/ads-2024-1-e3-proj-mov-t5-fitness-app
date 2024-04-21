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
import { IListOneUserGroupDto, IListOneUserGroupRes } from '../../dto';

@Injectable()
export class UserGroupListOneService {
    constructor(
        private userGroupRepositoryQueries: UserGroupRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listOne({
        id,
    }: IListOneUserGroupDto): Promise<
        Either<ParametersError, ParametersSuccess<IListOneUserGroupRes>>
    > {
        try {
            const userGroup = await this.userGroupRepositoryQueries.listOne({
                id,
            });

            if (!userGroup.id)
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
                    userGroup,
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
