import { Module } from '@nestjs/common';
import { BooksResolver } from './book.resolver';
import { BooksService } from './book.service';

@Module({
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
