import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { UserRepositoryPrismaService } from './prisma.repository.service';

@Module({
    imports: [PrismaModule],
    providers: [UserRepositoryPrismaService],
    exports: [UserRepositoryPrismaService],
})
export class UserRepositoryPrismaModule {}
