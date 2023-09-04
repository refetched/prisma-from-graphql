import { IntFilterInput as GraphQLIntFilterInput } from '@refetched/graphql-types';
import { IntFilter as PrismaIntFilter } from '@refetched/prisma-types';

export const getPrismaFromGraphQLIntFilterInput = (input: GraphQLIntFilterInput): PrismaIntFilter => {
  const response: PrismaIntFilter = {};

  if (input.equals !== null && input.equals !== undefined) {
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
