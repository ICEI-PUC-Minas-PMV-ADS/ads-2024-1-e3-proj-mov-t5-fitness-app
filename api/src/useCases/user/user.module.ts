import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { Messages } from 'src/shared/Services';

import {
    UserCreateController,
    UserDeletedController,
    UserListAllController,
    UserListOneController,
    UserUpdateController,
} from './controllers';

import { UserRepositoryPrismaService } from 'src/repositoryQueries/user/prisma';

import { UserGroupRepositoryPrismaService } from 'src/repositoryQueries/userGroup/prisma';
import { HandlePassword } from 'src/shared/Services/HandlePassword';
import {
    UserCreateService,
    UserDeletedService,
    UserListAllService,
    UserListOneService,
    UserUpdateService,
} from './services';

@Module({
    imports: [PrismaModule],
    controllers: [
        UserCreateController,
        UserDeletedController,
        UserListAllController,
        UserListOneController,
        UserUpdateController,
    ],
    providers: [
        // External Providers:
        UserRepositoryPrismaService,
        UserGroupRepositoryPrismaService,
        Messages,
        HandlePassword,
        // Internal Providers:
        UserCreateService,
        UserDeletedService,
        UserListAllService,
        UserListOneService,
        UserUpdateService,
    ],
    exports: [],
})
export class UserModule {}
