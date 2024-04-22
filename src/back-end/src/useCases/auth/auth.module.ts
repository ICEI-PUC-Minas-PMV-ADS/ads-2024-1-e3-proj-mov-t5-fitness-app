import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database';
import { Messages } from 'src/shared/Services';

import {
    AuthLoginController,
    AuthLogoutController,
    AuthRefreshController,
} from './controllers';

import { UserRepositoryPrismaService } from 'src/repositoryQueries/user/prisma';

import { JwtModule } from '@nestjs/jwt';
import { HandlePassword } from 'src/shared/Services/HandlePassword';
import { AuthLoginService, AuthRefreshService } from './services';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '24h' },
        }),
    ],
    controllers: [
        AuthLoginController,
        AuthLogoutController,
        AuthRefreshController,
    ],
    providers: [
        // External Providers:
        UserRepositoryPrismaService,
        Messages,
        HandlePassword,
        // Internal Providers:
        AuthLoginService,
        AuthRefreshService,
    ],
    exports: [],
})
export class AuthModule {}
