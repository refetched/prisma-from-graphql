import { BooleanFilterInput as GraphQLBooleanFilterInput } from '@refetched/graphql-types';
import { BooleanFilter as PrismaBooleanFilter } from '@refetched/prisma-types';

export const getPrismaBooleanFilterFromGraphQL = (input: GraphQLBooleanFilterInput): PrismaBooleanFilter => {
  const response: PrismaBooleanFilter = {};

  if (input.equals !== null && input.equals !== undefined) {
    response.equals = input.equals;
  }

  return response;
};
