## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the docker

```bash
# Run PostgreSQL
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

# Stop PostgreSQL
docker container stop postgres-nest
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Section: GraphQL and MongoDB

```bash
# run mongo db

docker run --name mongo -p 27017:27017 -d mongo

# run graphQL playground

http://localhost:3000/graphql

```
