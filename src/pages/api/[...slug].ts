import {
  createVercelHttpServerHandler,
  bootstrapNest,
} from 'create-vercel-http-server-handler';
import { AppModule } from '../../server/app/app.module';
import { useGlobal, nestApplicationOptions } from '../../main';

export default createVercelHttpServerHandler({
  bootstrap: bootstrapNest({
    AppModule,
    useGlobal,
    nestApplicationOptions,
  }),
  NODE_ENV: process.env.NODE_ENV,
  NEST_PORT: Number(process.env.NEST_PORT),
});

// https://nextjs.org/docs/api-routes/api-middlewares#custom-config
// https://github.com/vercel/next.js/discussions/13405
export const config = {
  api: {
    bodyParser: false,
  },
};
