import { BooleanFilterInput as GraphQLBooleanFilterInput } from '@refetched/graphql-types';
import { getPrismaBooleanFilterFromGraphQL } from '..';

describe('GIVEN the function', () => {
  let input: GraphQLBooleanFilterInput;

  describe('AND the equals field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { equals: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaBooleanFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { equals: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaBooleanFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS true', () => {
      beforeEach(() => {
        input = { equals: true };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaBooleanFilterFromGraphQL(input);
        const expected = { equals: input.equals };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS false', () => {
      beforeEach(() => {
        input = { equals: false };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaBooleanFilterFromGraphQL(input);
        const expected = { equals: input.equals };
        expect(received).toEqual(expected);
      });
    });
  });
});
