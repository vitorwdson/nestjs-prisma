import { Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './book.service';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => String)
  async book(): Promise<string> {
    return 'book';
  }
}
