import { OrderByInput as GraphQLOrderByInput } from '@refetched/graphql-types';
import { OrderByInput as PrismaOrderByInput } from '@refetched/prisma-types';
import { getPrismaSortOrderFromGraphQL } from '..';

export const getPrismaOrderByInputFromGraphQL = <T extends object>(
  input: GraphQLOrderByInput<T>,
): PrismaOrderByInput<T> => {
  const response: PrismaOrderByInput<T> = {};

  for (const key in input) {
    if (input.hasOwnProperty(key) && input[key] !== null && input[key] !== undefined) {
      response[key] = getPrismaSortOrderFromGraphQL(input[key]!);
    }
  }

  return response;
};
