import { NestFactory } from '@nestjs/core';
import { INestApplication, NestApplicationOptions } from '@nestjs/common';
import { AppModule } from './server/app/app.module';

export const nestApplicationOptions: NestApplicationOptions = {
  logger: false,
};

export async function useGlobal(app: INestApplication) {
  app.setGlobalPrefix('/api');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await useGlobal(app);
  await app.listen(Number(process.env.NEST_PORT) || 3000);
}
if (process.env.CLI === 'NEST') {
  bootstrap();
}
