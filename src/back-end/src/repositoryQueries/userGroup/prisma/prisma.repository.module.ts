import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { UserGroupRepositoryPrismaService } from './prisma.repository.service';

@Module({
    imports: [PrismaModule],
    providers: [UserGroupRepositoryPrismaService],
    exports: [UserGroupRepositoryPrismaService],
})
export class UserGroupRepositoryPrismaModule {}
