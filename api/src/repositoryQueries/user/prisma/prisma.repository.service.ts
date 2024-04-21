import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { formattedPagingResponse } from 'src/shared/Services';
import { IPaginationResponse } from 'src/shared/interfaces';
import { IUserRepositoryQueries } from '..';

import {
    ICreateUserDto,
    ICreateUserRes,
    IDeleteUserDto,
    IDeleteUserRes,
    IListOneUserDto,
    IListOneUserRes,
    IListUserDto,
    IListUserRes,
    IUpdateUserDto,
    IUpdateUserRes,
} from 'src/useCases/user/dto';

@Injectable()
export class UserRepositoryPrismaService implements IUserRepositoryQueries {
    constructor(private prisma: PrismaService) {}

    private selectedDataUserRes() {
        return {
            id: true,
            email: true,
            name: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        };
    }

    async create({
        name,
        email,
        password,
    }: ICreateUserDto): Promise<ICreateUserRes> {
        try {
            const newUser = await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                },
                select: this.selectedDataUserRes(),
            });

            if (!newUser) return newUser;
            else return newUser;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async update({
        id,
        email,
        name,
        password,
    }: IUpdateUserDto): Promise<IUpdateUserRes> {
        try {
            const updatedUser = await this.prisma.user.update({
                data: {
                    email,
                    name,
                    password,
                },
                where: {
                    id,
                },
                select: this.selectedDataUserRes(),
            });

            if (!updatedUser) return updatedUser;
            else return updatedUser;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async delete({ id }: IDeleteUserDto): Promise<IDeleteUserRes> {
        try {
            const userDeleted = await this.prisma.user.delete({
                where: {
                    id,
                },
                select: this.selectedDataUserRes(),
            });

            if (!userDeleted) return userDeleted;
            else return userDeleted;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async list({
        itemsPerPage,
        itemsToSkip,
    }: IListUserDto): Promise<IPaginationResponse<IListUserRes>> {
        try {
            let pagination = undefined;

            if (itemsPerPage && (itemsToSkip || itemsToSkip === 0))
                pagination = {
                    skip: itemsToSkip,
                    take: itemsPerPage,
                };

            const [_count, users] = await this.prisma.$transaction([
                this.prisma.user.count(),
                this.prisma.user.findMany({
                    select: this.selectedDataUserRes(),
                    ...pagination,
                }),
            ]);

            if (!users[0])
                return {
                    data: users,
                };

            return formattedPagingResponse<IListUserRes>({
                total: _count,
                skip: itemsToSkip,
                take: itemsPerPage,
                data: users,
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async listOne({ id }: IListOneUserDto): Promise<IListOneUserRes> {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    id,
                },
                select: this.selectedDataUserRes(),
            });

            if (!user) return user;
            else return user;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
