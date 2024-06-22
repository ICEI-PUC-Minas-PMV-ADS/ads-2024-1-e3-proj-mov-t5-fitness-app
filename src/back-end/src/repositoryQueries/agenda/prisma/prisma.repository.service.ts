import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { formattedPagingResponse } from 'src/shared/Services';
import { IPaginationResponse } from 'src/shared/interfaces';
import { IAgendaRepositoryQueries } from '..';

import { Prisma } from '@prisma/client';
import {
    IAlreadyExistAgendaDto,
    ICreateAgendaDto,
    ICreateAgendaRes,
    IDeleteAgendaDto,
    IListAgendaDto,
    IListAgendaRes,
    IListDayAgendaDto,
    IListDayAgendaRes,
    IListOneAgendaDto,
    IListOneAgendaRes,
    IUpdateAgendaDto,
    IUpdateAgendaRes,
} from 'src/useCases/agenda/dto';
import { IAgendaEntity } from 'src/useCases/agenda/entities/agenda.entity';

@Injectable()
export class AgendaRepositoryPrismaService implements IAgendaRepositoryQueries {
    constructor(private prisma: PrismaService) {}

    async create({
        days,
        exercises,
        userId,
    }: ICreateAgendaDto): Promise<ICreateAgendaRes> {
        try {
            const newAgenda = await this.prisma.agenda.create({
                data: {
                    days,
                    exercises: {
                        connect: exercises,
                    },
                    userId,
                },
                include: {
                    exercises: true,
                    user: true,
                },
            });

            if (!newAgenda) return newAgenda;
            else return newAgenda;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async update({
        id,
        days,
        exercises,
        userId,
    }: IUpdateAgendaDto): Promise<IUpdateAgendaRes> {
        try {
            const updatedAgenda = await this.prisma.agenda.update({
                data: {
                    days,
                    exercises: {
                        connect: exercises,
                    },
                    userId,
                },
                where: {
                    id,
                },
                include: {
                    user: true,
                    exercises: true,
                },
            });

            if (!updatedAgenda) return updatedAgenda;
            else return updatedAgenda;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async delete({ id }: IDeleteAgendaDto): Promise<IAgendaEntity> {
        try {
            const agendaDeleted = await this.prisma.agenda.delete({
                where: {
                    id,
                },
                include: {
                    user: true,
                    exercises: true,
                },
            });

            if (!agendaDeleted) return agendaDeleted;
            else return agendaDeleted;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async list({
        itemsPerPage,
        itemsToSkip,
    }: IListAgendaDto): Promise<IPaginationResponse<IListAgendaRes>> {
        try {
            let pagination = undefined;

            if (itemsPerPage && (itemsToSkip || itemsToSkip === 0))
                pagination = {
                    skip: itemsToSkip,
                    take: itemsPerPage,
                };

            const [_count, agendas] = await this.prisma.$transaction([
                this.prisma.agenda.count(),
                this.prisma.agenda.findMany({
                    ...pagination,
                }),
            ]);

            if (!agendas[0])
                return {
                    // @ts-ignore
                    data: agendas,
                };

            return formattedPagingResponse<IListAgendaRes>({
                total: _count,
                skip: itemsToSkip,
                take: itemsPerPage,
                // @ts-ignore
                data: agendas,
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async listOne({
        id,
        userId,
    }: IListOneAgendaDto): Promise<IListOneAgendaRes> {
        try {
            let filters: Prisma.AgendaWhereInput = undefined;

            if (id)
                filters = {
                    id,
                };

            if (userId)
                filters = {
                    ...filters,
                    userId,
                };

            const agenda = await this.prisma.agenda.findFirst({
                where: filters,
                include: {
                    user: true,
                    exercises: true,
                },
            });

            if (!agenda) return agenda;
            else return agenda;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async listDay({
        day,
        userId,
    }: IListDayAgendaDto): Promise<IListDayAgendaRes> {
        try {
            const agenda = await this.prisma.agenda.findFirst({
                where: {
                    days: {
                        has: day,
                    },
                    userId,
                },
                include: {
                    user: true,
                    exercises: true,
                },
            });

            if (!agenda) return agenda;
            else return agenda;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async alreadyExist({
        id,
        userId,
    }: IAlreadyExistAgendaDto): Promise<boolean> {
        try {
            const agendaAlreadyExist = await this.prisma.agenda.findFirst({
                where: {
                    OR: [
                        {
                            id,
                        },
                        {
                            userId,
                        },
                    ],
                },
            });

            return !!agendaAlreadyExist;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
