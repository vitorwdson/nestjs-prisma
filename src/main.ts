import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

let port = parseInt(process.env.PORT);
if (isNaN(port)) {
  port = 4000;
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(port);
}
bootstrap();
