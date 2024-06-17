import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { Messages } from 'src/shared/Services';

import {
    AgendaCreateController,
    AgendaDeletedController,
    AgendaListAllController,
    AgendaListOneController,
    AgendaUpdateController,
} from './controllers';

import { AgendaRepositoryPrismaService } from 'src/repositoryQueries/agenda/prisma';

import { HandlePassword } from 'src/shared/Services/HandlePassword';
import {
    AgendaCreateService,
    AgendaDeletedService,
    AgendaListAllService,
    AgendaListOneService,
    AgendaUpdateService,
} from './services';

@Module({
    imports: [PrismaModule],
    controllers: [
        AgendaCreateController,
        AgendaDeletedController,
        AgendaListAllController,
        AgendaListOneController,
        AgendaUpdateController,
    ],
    providers: [
        // External Providers:
        AgendaRepositoryPrismaService,
        Messages,
        HandlePassword,
        // Internal Providers:
        AgendaCreateService,
        AgendaDeletedService,
        AgendaListAllService,
        AgendaListOneService,
        AgendaUpdateService,
    ],
    exports: [],
})
export class AgendaModule {}
