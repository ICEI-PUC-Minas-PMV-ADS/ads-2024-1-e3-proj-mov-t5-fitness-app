import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { formattedPagingResponse } from 'src/shared/Services';
import { IPaginationResponse } from 'src/shared/interfaces';

import {
    IAlreadyExistUserGroupDto,
    ICreateUserGroupDto,
    ICreateUserGroupRes,
    IDeleteUserGroupDto,
    IDeleteUserGroupRes,
    IListOneUserGroupDto,
    IListOneUserGroupRes,
    IListUserGroupDto,
    IListUserGroupRes,
    IUpdateUserGroupDto,
    IUpdateUserGroupRes,
} from 'src/useCases/userGroup/dto';
import { IUserGroupRepositoryQueries } from '..';

@Injectable()
export class UserGroupRepositoryPrismaService
    implements IUserGroupRepositoryQueries
{
    constructor(private prisma: PrismaService) {}

    async create({ name }: ICreateUserGroupDto): Promise<ICreateUserGroupRes> {
        try {
            const newUserGroup = await this.prisma.userGroup.create({
                data: {
                    name,
                },
            });

            if (!newUserGroup) return newUserGroup;
            else return newUserGroup;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async update({
        id,
        name,
    }: IUpdateUserGroupDto): Promise<IUpdateUserGroupRes> {
        try {
            const updatedUserGroup = await this.prisma.userGroup.update({
                data: {
                    name,
                },
                where: {
                    id,
                },
            });

            if (!updatedUserGroup) return updatedUserGroup;
            else return updatedUserGroup;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async delete({ id }: IDeleteUserGroupDto): Promise<IDeleteUserGroupRes> {
        try {
            const userDeletedGroup = await this.prisma.userGroup.delete({
                where: {
                    id,
                },
            });

            if (!userDeletedGroup) return userDeletedGroup;
            else return userDeletedGroup;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async list({
        itemsPerPage,
        itemsToSkip,
    }: IListUserGroupDto): Promise<IPaginationResponse<IListUserGroupRes>> {
        try {
            let pagination = undefined;

            if (itemsPerPage && (itemsToSkip || itemsToSkip === 0))
                pagination = {
                    skip: itemsToSkip,
                    take: itemsPerPage,
                };

            const [_count, userGroups] = await this.prisma.$transaction([
                this.prisma.userGroup.count(),
                this.prisma.userGroup.findMany({
                    ...pagination,
                }),
            ]);

            if (!userGroups[0])
                return {
                    // @ts-ignore
                    data: userGroups,
                };

            return formattedPagingResponse<IListUserGroupRes>({
                total: _count,
                skip: itemsToSkip,
                take: itemsPerPage,
                // @ts-ignore
                data: userGroups,
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async listOne({
        id,
        name,
    }: IListOneUserGroupDto): Promise<IListOneUserGroupRes> {
        try {
            const userGroup = await this.prisma.userGroup.findFirst({
                where: {
                    id,
                    name,
                },
            });

            if (!userGroup) return userGroup;
            else return userGroup;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async alreadyExist({
        name,
        id,
    }: IAlreadyExistUserGroupDto): Promise<boolean> {
        try {
            const userGroupAlreadyExist = await this.prisma.userGroup.findFirst(
                {
                    where: {
                        OR: [
                            {
                                id,
                            },
                            {
                                name,
                            },
                        ],
                    },
                },
            );

            return !!userGroupAlreadyExist;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
