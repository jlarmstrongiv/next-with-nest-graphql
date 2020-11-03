import { INestApplication } from '@nestjs/common';

export async function useGlobal(app: INestApplication) {
  app.setGlobalPrefix('/api');
}
