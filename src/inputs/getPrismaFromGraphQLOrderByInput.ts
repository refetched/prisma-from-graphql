import { OrderByInput as GraphQLOrderByInput } from '@refetched/graphql-types';
import { OrderByInput as PrismaOrderByInput } from '@refetched/prisma-types';
import { getPrismaFromGraphQLSortOrder } from '..';

export const getPrismaFromGraphQLOrderByInput = <T extends object>(
  input: GraphQLOrderByInput<T>,
): PrismaOrderByInput<T> => {
  const response: PrismaOrderByInput<T> = {};

  for (const key in input) {
    if (input.hasOwnProperty(key) && input[key] !== null && input[key] !== undefined) {
      response[key] = getPrismaFromGraphQLSortOrder(input[key]!);
    }
  }

  return response;
};
