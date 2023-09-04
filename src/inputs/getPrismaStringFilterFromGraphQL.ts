import { StringFilterInput as GraphQLStringFilterInput } from '@refetched/graphql-types';
import { StringFilter as PrismaStringFilter } from '@refetched/prisma-types';
import { getPrismaQueryModeFromGraphQL } from '..';

export const getPrismaStringFilterFromGraphQL = (input: GraphQLStringFilterInput): PrismaStringFilter => {
  const response: PrismaStringFilter = {};

  if (input.contains !== null && input.contains !== undefined) {
    response.contains = input.contains;
  }

  if (input.endsWith !== null && input.endsWith !== undefined) {
    response.endsWith = input.endsWith;
  }

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

  if (input.mode !== null && input.mode !== undefined) {
    response.mode = getPrismaQueryModeFromGraphQL(input.mode);
  }

  if (input.startsWith !== null && input.startsWith !== undefined) {
    response.startsWith = input.startsWith;
  }

  return response;
};
