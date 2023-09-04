import { getPrismaSortOrderFromGraphQL } from '..';

describe('GIVEN the function', () => {
  describe('AND the GraphQL SortOrder is ASC', () => {
    test('THEN it should return asc', () => {
      const response = getPrismaSortOrderFromGraphQL('ASC');
      expect(response).toEqual('asc');
    });
  });

  describe('AND the graphql SortOrder is DESC', () => {
    test('THEN it should return desc', () => {
      const response = getPrismaSortOrderFromGraphQL('DESC');
      expect(response).toEqual('desc');
    });
  });
});
