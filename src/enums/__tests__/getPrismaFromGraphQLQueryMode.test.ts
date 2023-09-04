import { getPrismaFromGraphQLQueryMode } from '..';

describe('GIVEN the function', () => {
  describe('AND the GraphQL QueryMode is DEFAULT', () => {
    test('THEN it should return default', () => {
      const response = getPrismaFromGraphQLQueryMode('DEFAULT');
      expect(response).toEqual('default');
    });
  });

  describe('AND the GraphQL QueryMode is INSENSITIVE', () => {
    test('THEN it should return insensitive', () => {
      const response = getPrismaFromGraphQLQueryMode('INSENSITIVE');
      expect(response).toEqual('insensitive');
    });
  });
});
