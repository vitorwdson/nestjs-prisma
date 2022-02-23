import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Book as BookModel } from '@prisma/client';

@ObjectType()
export class BookType implements BookModel {
  @Field(() => Int)
  id: number;
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
