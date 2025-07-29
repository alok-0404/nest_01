import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //jo dto me filed define nai h unko rokega
    forbidNonWhitelisted: true,  //unknown field , error aayega
  }))
  app.use(express.json())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
 