import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { AgendaRepositoryPrismaService } from './prisma.repository.service';

@Module({
    imports: [PrismaModule],
    providers: [AgendaRepositoryPrismaService],
    exports: [AgendaRepositoryPrismaService],
})
export class AgendaRepositoryPrismaModule {}
