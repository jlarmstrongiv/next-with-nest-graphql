import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      path: '/api/graphql',
    }),
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
