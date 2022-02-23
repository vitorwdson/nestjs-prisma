# NestJS + Prisma example

This project is supposed to be an example on how to use prisma as your ORM in NestJS.  
In this case, I used it to create a GraphQL API, buy you could do (almost) the same for a REST API.

## Required steps

To setup a NestJS + Prisma project, do the following:

1. Start your NestJS project

> Do this by using the `nest new project-name` command (you need `@nestjs/cli` installed globally).

1. Initiate your prisma schema

> To do this, run the `npx prisma` command (you need to install `prisma` as a dev dependency).

1. Configure the database connection

> Prisma, by default, connects to the database through the [DATABASE_URL env variable](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres).

1. Create your table models

> Define your tables using the schema.prisma file as explained in [this page](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres).

1. Generate the prisma client

> You can do this by installing `@prisma/client` or running `npx prisma generate`.

1. Now, in order to use prisma in NestJS, you need to first create the Prisma Service

> This service is an injectable extension of the base prisma client.
> You can check it [here](src/prisma.service.ts#L4-L15).

1. After this is done, you can create your module services

> The module services will need to be injected with te prisma service in order to access your database.
> This is done by adding `private readonly prisma: PrismaService` to your service's constructor parameters.
> Again, you can check an example [here](src/authors/author.service.ts#L7)

1. Finally, you need to provide the prisma Prisma Service to your module service

> This is done on your module definition file, simply by adding your `PrismaService` to the providers list.
> The example file can be found [here](src/authors/author.module.ts#L7)

## Extra recommendations

Since prisma has a ton of type declarations generated for your models, you can extend them to create your GraphQL types and avoid errors.
