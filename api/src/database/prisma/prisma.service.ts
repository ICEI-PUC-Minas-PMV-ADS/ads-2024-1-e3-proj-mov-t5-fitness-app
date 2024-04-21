import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    async onModuleInit() {
        await this.$connect();
        console.info(
            '[New Connection] Successful database connection PostgresSQL (Prisma)',
        );
    }

    async onModuleDestroy() {
        console.info(
            '[Server Shutdown] Disconnecting from the PostgresSQL database (Prisma)',
        );
        await this.$disconnect();
    }
}
