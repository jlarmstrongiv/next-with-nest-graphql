// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createVercelHttpServerHandler, bootstrapNest } from '../../handler';
import { AppModule } from '../../server/app/app.module';
import { useGlobal } from '../../server/main';

export default createVercelHttpServerHandler(
  bootstrapNest(AppModule, useGlobal),
  !!process.env.AWS_REGION,
);

// https://nextjs.org/docs/api-routes/api-middlewares#custom-config
// https://github.com/vercel/next.js/discussions/13405
export const config = {
  api: {
    bodyParser: false,
  },
};
