import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableShutdownHooks();

    if (env.NODE_ENV === 'local')
        app.enableCors({
            credentials: true,
            origin: [
                'http://localhost:8081',
                'http://localhost:3333',
                'http://localhost:3000',
            ],
        });

    const config = new DocumentBuilder()
        .setTitle('Fitnes App API')
        .setDescription('API do Fitnes App utilizada como template')
        .setVersion('1.0.0')
        .addTag('API')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);

    await app.listen(env.PORT);
}
bootstrap();
