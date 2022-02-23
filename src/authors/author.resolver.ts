import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author as AuthorModel } from '@prisma/client';
import { AuthorsService } from './author.service';
import {
  AuthorType,
  CreateAuthorInput,
  UpdateAuthorInput,
} from './dto/author.dto';

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => AuthorType, { nullable: true })
  async author(
    @Args('authorId', { type: () => Int }) authorId: number,
  ): Promise<AuthorModel | null> {
    return this.authorsService.findOne({
      where: {
        id: authorId,
      },
    });
  }

  @Query(() => [AuthorType])
  async listAuthors(): Promise<AuthorModel[]> {
    return this.authorsService.findAll();
  }

  @Mutation(() => AuthorType)
  async createAuthor(
    @Args('data') data: CreateAuthorInput,
  ): Promise<AuthorModel> {
    return this.authorsService.create(data);
  }

  @Mutation(() => AuthorType)
  async updateAuthor(
    @Args('authorId', { type: () => Int }) authorId: number,
    @Args('data') data: UpdateAuthorInput,
  ): Promise<AuthorModel> {
    return this.authorsService.update(authorId, data);
  }
}
