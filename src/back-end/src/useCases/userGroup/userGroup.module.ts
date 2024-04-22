import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { Messages } from 'src/shared/Services';

import {
    UserGroupCreateController,
    UserGroupDeletedController,
    UserGroupListAllController,
    UserGroupListOneController,
    UserGroupUpdateController,
} from './controllers';

import { UserGroupRepositoryPrismaService } from 'src/repositoryQueries/userGroup/prisma';

import {
    UserGroupCreateService,
    UserGroupDeletedService,
    UserGroupListAllService,
    UserGroupListOneService,
    UserGroupUpdateService,
} from './services';

@Module({
    imports: [PrismaModule],
    controllers: [
        UserGroupCreateController,
        UserGroupDeletedController,
        UserGroupListAllController,
        UserGroupListOneController,
        UserGroupUpdateController,
    ],
    providers: [
        // External Providers:
        UserGroupRepositoryPrismaService,
        Messages,
        // Internal Providers:
        UserGroupCreateService,
        UserGroupDeletedService,
        UserGroupListAllService,
        UserGroupListOneService,
        UserGroupUpdateService,
    ],
    exports: [],
})
export class UserGroupModule {}
