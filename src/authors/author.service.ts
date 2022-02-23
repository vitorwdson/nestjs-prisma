import { Injectable } from '@nestjs/common';
import { Author as AuthorModel, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(args?: Prisma.AuthorFindManyArgs): Promise<AuthorModel[]> {
    return this.prisma.author.findMany(args);
  }

  async findOne(args?: Prisma.AuthorFindFirstArgs): Promise<AuthorModel> {
    return this.prisma.author.findFirst(args);
  }

  async create(data: AuthorModel): Promise<AuthorModel> {
    return this.prisma.author.create({
      data,
    });
  }

  async update(
    authorId: number,
    data: Prisma.AuthorUpdateInput,
  ): Promise<AuthorModel> {
    return this.prisma.author.update({
      where: {
        id: authorId,
      },
      data,
    });
  }
}
