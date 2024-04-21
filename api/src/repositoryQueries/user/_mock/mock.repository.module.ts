import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { UserRepositoryMockService } from './mock.repository.service';

@Module({
    imports: [PrismaModule],
    providers: [UserRepositoryMockService],
    exports: [UserRepositoryMockService],
})
export class UserRepositoryMockModule {}
