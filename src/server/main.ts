import { INestApplication } from '@nestjs/common';
import { AppModule } from './app/app.module';

export async function useGlobal(app: INestApplication) {
  app.setGlobalPrefix('/api');
}
