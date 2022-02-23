import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Book as BookModel } from '@prisma/client';
import { BooksService } from './book.service';
import { BookType } from './dto/book.dto';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => BookType, { nullable: true })
  async book(
    @Args('bookId', { type: () => Int }) bookId: number,
  ): Promise<BookModel> {
    return this.booksService.findOne({
      where: {
        id: bookId,
      },
    });
  }

  @Query(() => [BookType])
  async listBooks(
    @Args('authorId', { type: () => Int }) authorId: number,
  ): Promise<BookModel[]> {
    return this.booksService.findAll({
      where: {
        authorId,
      },
    });
  }
}
