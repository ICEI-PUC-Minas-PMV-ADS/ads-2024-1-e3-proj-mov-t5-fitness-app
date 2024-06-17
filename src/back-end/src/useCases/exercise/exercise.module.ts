import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { Messages } from 'src/shared/Services';

import {
    ExerciseCreateController,
    ExerciseDeletedController,
    ExerciseListAllController,
    ExerciseListOneController,
    ExerciseUpdateController,
} from './controllers';

import { ExerciseRepositoryPrismaService } from 'src/repositoryQueries/exercises/prisma';
import { HandlePassword } from 'src/shared/Services/HandlePassword';
import {
    ExerciseCreateService,
    ExerciseDeletedService,
    ExerciseListAllService,
    ExerciseListOneService,
    ExerciseUpdateService,
} from './services';

@Module({
    imports: [PrismaModule],
    controllers: [
        ExerciseCreateController,
        ExerciseDeletedController,
        ExerciseListAllController,
        ExerciseListOneController,
        ExerciseUpdateController,
    ],
    providers: [
        // External Providers:
        ExerciseRepositoryPrismaService,
        Messages,
        HandlePassword,
        // Internal Providers:
        ExerciseCreateService,
        ExerciseDeletedService,
        ExerciseListAllService,
        ExerciseListOneService,
        ExerciseUpdateService,
    ],
    exports: [],
})
export class ExerciseModule {}
