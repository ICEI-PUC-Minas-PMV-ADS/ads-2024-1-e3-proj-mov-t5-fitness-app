import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { ExerciseRepositoryPrismaService } from './prisma.repository.service';

@Module({
    imports: [PrismaModule],
    providers: [ExerciseRepositoryPrismaService],
    exports: [ExerciseRepositoryPrismaService],
})
export class ExerciseRepositoryPrismaModule {}
