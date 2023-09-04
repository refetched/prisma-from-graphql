import { QueryMode as GraphQLQueryMode } from '@refetched/graphql-types';
import { QueryMode as PrismaQueryMode } from '@refetched/prisma-types';

export const getPrismaQueryModeFromGraphQL = (queryMode: GraphQLQueryMode): PrismaQueryMode => {
  switch (queryMode) {
    case 'DEFAULT':
      return 'default';
    case 'INSENSITIVE':
      return 'insensitive';
  }
};
