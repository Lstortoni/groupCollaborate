import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configserv = app.get(ConfigService);

  app.setGlobalPrefix('api');

  await app.listen(configserv.get('PORT'));
}
bootstrap();
