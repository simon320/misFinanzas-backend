import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1/');

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('misFinanzas-API Documentacion')
    .setDescription('Rest API de aplicacion de finanzas')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('pfx')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
