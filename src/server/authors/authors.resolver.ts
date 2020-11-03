import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { AuthorsService } from './authors.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }
}
