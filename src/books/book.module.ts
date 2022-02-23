import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BooksResolver } from './book.resolver';
import { BooksService } from './book.service';

@Module({
  providers: [PrismaService, BooksService, BooksResolver],
})
export class BooksModule {}
