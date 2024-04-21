import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import {
    formattedPagingResponse,
    generatorCodeService,
} from 'src/shared/Services';
import { IPaginationResponse } from 'src/shared/interfaces';
import { IUserRepositoryQueries } from '..';

import { virtualPaginationArray } from 'src/shared/Services/VirtualPaginationArray';
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
import { IUserEntity } from 'src/useCases/user/entities/user.entity';

@Injectable()
export class UserRepositoryMockService implements IUserRepositoryQueries {
    private usersDataMock: Array<IUserEntity> = undefined;

    constructor(private prisma: PrismaService) {}

    async create({
        name,
        email,
        password,
    }: ICreateUserDto): Promise<ICreateUserRes> {
        try {
            const id = Number(generatorCodeService.execute().code);

            this.usersDataMock.push({
                id,
                email,
                name,
                password,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            return this.usersDataMock.find((user) => user.id === id);
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
            this.usersDataMock = this.usersDataMock.map((user) => {
                if (user.id === id) {
                    user = {
                        id: user.id,
                        email,
                        name,
                        password,
                        createdAt: user.createdAt,
                        updatedAt: new Date(),
                    };
                }

                return user;
            });

            return this.usersDataMock.find((user) => user.id === id);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async delete({ id }: IDeleteUserDto): Promise<IDeleteUserRes> {
        try {
            this.usersDataMock = this.usersDataMock.filter((user) => {
                if (user.id !== id) return user;
            });

            return this.usersDataMock.find((user) => user.id === id);
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
            let usersData = [];

            if (itemsPerPage && (itemsToSkip || itemsToSkip === 0))
                usersData = virtualPaginationArray<IUserEntity>(
                    this.usersDataMock,
                    itemsToSkip,
                    itemsPerPage,
                );

            return formattedPagingResponse<IListUserRes>({
                total: this.usersDataMock.length,
                skip: itemsToSkip,
                take: itemsPerPage,
                data: usersData,
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async listOne({ id }: IListOneUserDto): Promise<IListOneUserRes> {
        try {
            return this.usersDataMock.find((user) => user.id === id);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
