import { IDFilterInput as GraphQLIDFilterInput } from '@refetched/graphql-types';
import { IDNullableFilter as PrismaIDNullableFilter } from '@refetched/prisma-types';

export const getPrismaFromGraphQLIDNullableFilterInput = (input: GraphQLIDFilterInput): PrismaIDNullableFilter => {
  const response: PrismaIDNullableFilter = {};

  if (input.equals !== undefined) {
    response.equals = input.equals;
  }

  if (input.in !== null && input.in !== undefined) {
    response.in = input.in;
  }

  return response;
};
