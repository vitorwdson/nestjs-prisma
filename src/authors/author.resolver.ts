import { Query, Resolver } from '@nestjs/graphql';
import { AuthorsService } from './author.service';

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => String)
  async test(): Promise<string> {
    return 'test';
  }
}
