import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfiguration } from 'src/config/env.config';
import { ValidationPipe } from '@nestjs/common';




async function bootstrap() {  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  
    app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  

  await app.listen(EnvConfiguration().localHostPort);
}
bootstrap();
