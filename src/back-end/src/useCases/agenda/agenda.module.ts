import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { Messages } from 'src/shared/Services';

import {
    AgendaCreateController,
    AgendaDeletedController,
    AgendaListAllController,
    AgendaListDayController,
    AgendaListOneController,
} from './controllers';

import { AgendaRepositoryPrismaService } from 'src/repositoryQueries/agenda/prisma';

import { ExerciseRepositoryPrismaService } from 'src/repositoryQueries/exercises/prisma';
import { HandlePassword } from 'src/shared/Services/HandlePassword';
import {
    AgendaCreateService,
    AgendaDeletedService,
    AgendaListAllService,
    AgendaListDayService,
    AgendaListOneService,
} from './services';

@Module({
    imports: [PrismaModule],
    controllers: [
        AgendaCreateController,
        AgendaDeletedController,
        AgendaListAllController,
        AgendaListOneController,
        AgendaListDayController,
    ],
    providers: [
        // External Providers:
        AgendaRepositoryPrismaService,
        ExerciseRepositoryPrismaService,
        Messages,
        HandlePassword,
        // Internal Providers:
        AgendaCreateService,
        AgendaDeletedService,
        AgendaListAllService,
        AgendaListOneService,
        AgendaListDayService,
    ],
    exports: [],
})
export class AgendaModule {}
