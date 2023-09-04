import { IDFilterInput as GraphQLIDFilterInput } from '@refetched/graphql-types';
import { IDFilter as PrismaIDFilter } from '@refetched/prisma-types';

export const getPrismaIDFilterFromGraphQL = (input: GraphQLIDFilterInput): PrismaIDFilter => {
  const response: PrismaIDFilter = {};

  if (input.equals !== null && input.equals !== undefined) {
    response.equals = input.equals;
  }

  if (input.in !== null && input.in !== undefined) {
    response.in = input.in;
  }

  return response;
};
