import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { formattedPagingResponse } from 'src/shared/Services';
import { IPaginationResponse } from 'src/shared/interfaces';
import { IExerciseRepositoryQueries } from '..';

import {
    IAlreadyExistExerciseDto,
    ICreateExerciseDto,
    ICreateExerciseRes,
    IDeleteExerciseDto,
    IListExerciseDto,
    IListExerciseRes,
    IListOneExerciseDto,
    IListOneExerciseRes,
    IUpdateExerciseDto,
    IUpdateExerciseRes,
} from 'src/useCases/exercise/dto';

import { IExerciseEntity } from 'src/useCases/exercise/entities/exercise.entity';

@Injectable()
export class ExerciseRepositoryPrismaService
    implements IExerciseRepositoryQueries
{
    constructor(private prisma: PrismaService) {}

    async create({ name }: ICreateExerciseDto): Promise<ICreateExerciseRes> {
        try {
            const newExercise = await this.prisma.exercise.create({
                data: {
                    name,
                },
                include: {
                    agenda: true,
                },
            });

            if (!newExercise) return newExercise;
            else return newExercise;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async update({
        id,
        name,
    }: IUpdateExerciseDto): Promise<IUpdateExerciseRes> {
        try {
            const updatedExercise = await this.prisma.exercise.update({
                data: {
                    name,
                },
                where: {
                    id,
                },
                include: {
                    agenda: true,
                },
            });

            if (!updatedExercise) return updatedExercise;
            else return updatedExercise;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async delete({ id }: IDeleteExerciseDto): Promise<IExerciseEntity> {
        try {
            const exerciseDeleted = await this.prisma.exercise.delete({
                where: {
                    id,
                },
                include: {
                    agenda: true,
                },
            });

            if (!exerciseDeleted) return exerciseDeleted;
            else return exerciseDeleted;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async list({
        itemsPerPage,
        itemsToSkip,
    }: IListExerciseDto): Promise<IPaginationResponse<IListExerciseRes>> {
        try {
            let pagination = undefined;

            if (itemsPerPage && (itemsToSkip || itemsToSkip === 0))
                pagination = {
                    skip: itemsToSkip,
                    take: itemsPerPage,
                };

            const [_count, exercises] = await this.prisma.$transaction([
                this.prisma.exercise.count(),
                this.prisma.exercise.findMany({
                    ...pagination,
                }),
            ]);

            if (!exercises[0])
                return {
                    // @ts-ignore
                    data: exercises,
                };

            return formattedPagingResponse<IListExerciseRes>({
                total: _count,
                skip: itemsToSkip,
                take: itemsPerPage,
                // @ts-ignore
                data: exercises,
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async listOne({ id }: IListOneExerciseDto): Promise<IListOneExerciseRes> {
        try {
            const exercise = await this.prisma.exercise.findFirst({
                where: {
                    id,
                },
                include: {
                    agenda: true,
                },
            });

            if (!exercise) return exercise;
            else return exercise;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async alreadyExist({
        id,
        name,
    }: IAlreadyExistExerciseDto): Promise<boolean> {
        try {
            const exerciseAlreadyExist = await this.prisma.exercise.findFirst({
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
            });

            return !!exerciseAlreadyExist;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
