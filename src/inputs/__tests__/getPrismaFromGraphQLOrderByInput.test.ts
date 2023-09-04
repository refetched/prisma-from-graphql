import { OrderByInput as GraphQLOrderByInput } from '@refetched/graphql-types';
import { getPrismaFromGraphQLOrderByInput } from '..';

describe('GIVEN the function', () => {
  let input: GraphQLOrderByInput<{ id: string; name: string }>;

  beforeEach(() => {
    input = { name: 'ASC' };
  });

  test('THEN it should get the Prisma', () => {
    const received = getPrismaFromGraphQLOrderByInput(input);
    const expected = { name: 'asc' };
    expect(received).toEqual(expected);
  });
});
