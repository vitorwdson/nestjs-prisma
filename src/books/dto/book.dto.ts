import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { Book as BookModel, Prisma } from '@prisma/client';

@ObjectType()
export class BookType implements BookModel {
  @Field(() => Int)
  id: number;
  @Field(() => Int)
  authorId: number;
  @Field()
  title: string;
  @Field(() => GraphQLISODateTime)
  releaseDate: Date;
  @Field(() => Int, { nullable: true })
  pages: number | null;
  @Field(() => GraphQLISODateTime)
  createdAt: Date;
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@InputType()
export class CreateBookInput implements BookModel {
  id: number;
  @Field(() => Int)
  authorId: number;
  @Field()
  title: string;
  @Field(() => GraphQLISODateTime)
  releaseDate: Date;
  @Field(() => Int, { nullable: true })
  pages: number | null;
  createdAt: Date;
  updatedAt: Date;
}
