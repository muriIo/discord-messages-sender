//#region Imports

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//#endregion

//#region Initialization

async function bootstrap() {
  const logger: Logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 3000);

  logger.log(
    `Api está rodando na porta: ${process.env.PORT || 3000}`,
    'Bootstrap',
  );
}
bootstrap();

//#endregion