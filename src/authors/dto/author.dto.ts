import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { Author as AuthorModel, Prisma } from '@prisma/client';

@ObjectType()
export class AuthorType implements AuthorModel {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field(() => GraphQLISODateTime)
  birthDate: Date;
  @Field(() => GraphQLISODateTime)
  createdAt: Date;
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@InputType()
export class CreateAuthorInput implements AuthorModel {
  id: number;
  @Field()
  name: string;
  @Field(() => GraphQLISODateTime)
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

@InputType()
export class UpdateAuthorInput implements Prisma.AuthorUpdateInput {
  @Field({ nullable: true })
  name?: string;
  @Field(() => GraphQLISODateTime, { nullable: true })
  birthDate?: Date;
}
