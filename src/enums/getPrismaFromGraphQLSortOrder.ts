import { SortOrder as GraphQLSortOrder } from '@refetched/graphql-types';
import { SortOrder as PrismaSortOrder } from '@refetched/prisma-types';

export const getPrismaFromGraphQLSortOrder = (sortOrder: GraphQLSortOrder): PrismaSortOrder => {
  switch (sortOrder) {
    case 'ASC':
      return 'asc';
    case 'DESC':
      return 'desc';
  }
};
