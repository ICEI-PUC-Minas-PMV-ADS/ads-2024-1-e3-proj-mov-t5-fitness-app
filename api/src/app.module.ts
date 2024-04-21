import { ConfigModule } from '@nestjs/config';

// Primordial Services And Mdules
import { BeforeApplicationShutdown, Module } from '@nestjs/common';
import { PrismaModule } from './database';
import { Messages } from './shared/Services';
import { UserModule } from './useCases';

// Use Cases Imports

@Module({
    imports: [ConfigModule.forRoot(), PrismaModule, UserModule],
    controllers: [],
    providers: [Messages],
    exports: [],
})
export class AppModule implements BeforeApplicationShutdown {
    beforeApplicationShutdown(signal?: string) {
        console.info(
            `[Server Shutdown] The signal that caused the shutdown server was: ${signal}.`,
        );
    }
}
