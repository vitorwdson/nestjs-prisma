import { Injectable } from '@nestjs/common';
import { Book as BookModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

interface RequireAuthorID {
  where: {
    authorId: number;
  };
}
@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    args: Prisma.BookFindManyArgs & RequireAuthorID,
  ): Promise<BookModel[]> {
    return this.prisma.book.findMany(args);
  }

  async findOne(args: Prisma.BookFindFirstArgs): Promise<BookModel> {
    return this.prisma.book.findFirst(args);
  }

  async create(data: Prisma.BookCreateInput): Promise<BookModel> {
    return this.prisma.book.create({
      data,
    });
  }

  async update(
    bookId: number,
    data: Prisma.BookUpdateInput,
  ): Promise<BookModel> {
    return this.prisma.book.update({
      where: {
        id: bookId,
      },
      data,
    });
  }
}
