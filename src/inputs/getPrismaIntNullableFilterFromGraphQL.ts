import { IntFilterInput as GraphQLIntFilterInput } from '@refetched/graphql-types';
import { IntNullableFilter as PrismaIntNullableFilter } from '@refetched/prisma-types';

export const getPrismaIntNullableFilterFromGraphQL = (input: GraphQLIntFilterInput): PrismaIntNullableFilter => {
  const response: PrismaIntNullableFilter = {};

  if (input.equals !== undefined) {
    response.equals = input.equals;
  }

  if (input.gt !== null && input.gt !== undefined) {
    response.gt = input.gt;
  }

  if (input.gte !== null && input.gte !== undefined) {
    response.gte = input.gte;
  }

  if (input.in !== null && input.in !== undefined) {
    response.in = input.in;
  }

  if (input.lt !== null && input.lt !== undefined) {
    response.lt = input.lt;
  }

  if (input.lte !== null && input.lte !== undefined) {
    response.lte = input.lte;
  }

  return response;
};
