import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book as BookModel } from '@prisma/client';
import { BooksService } from './book.service';
import { BookType, CreateBookInput, UpdateBookInput } from './dto/book.dto';

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

  @Mutation(() => BookType)
  async createBook(@Args('data') data: CreateBookInput): Promise<BookModel> {
    const { authorId, ...rest } = data;
    return this.booksService.create({
      ...rest,

      author: {
        connect: {
          id: authorId,
        },
      },
    });
  }

  @Mutation(() => BookType)
  async updateBook(
    @Args('bookId', { type: () => Int }) bookId: number,
    @Args('data') data: UpdateBookInput,
  ): Promise<BookModel> {
    return this.booksService.update(bookId, data);
  }
}
