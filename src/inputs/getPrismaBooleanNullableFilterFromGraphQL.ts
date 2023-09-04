import { BooleanNullableFilterInput as GraphQLBooleanNullableFilterInput } from '@refetched/graphql-types';
import { BooleanNullableFilter as PrismaBooleanNullableFilter } from '@refetched/prisma-types';

export const getPrismaBooleanNullableFilterFromGraphQL = (
  input: GraphQLBooleanNullableFilterInput,
): PrismaBooleanNullableFilter => {
  const response: PrismaBooleanNullableFilter = {};

  if (input.equals !== undefined) {
    response.equals = input.equals;
  }

  return response;
};
