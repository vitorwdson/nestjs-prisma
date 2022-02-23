import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AuthorsResolver } from './author.resolver';
import { AuthorsService } from './author.service';

@Module({
  providers: [PrismaService, AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
