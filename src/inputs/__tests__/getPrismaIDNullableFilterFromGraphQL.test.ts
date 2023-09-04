import { IDNullableFilterInput as GraphQLIDNullableFilterInput } from '@refetched/graphql-types';
import { getPrismaIDNullableFilterFromGraphQL } from '..';

describe('GIVEN the function', () => {
  let input: GraphQLIDNullableFilterInput = {};

  describe('AND the equals field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { equals: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaIDNullableFilterFromGraphQL(input);
        const expected = { equals: input.equals };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { equals: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaIDNullableFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { equals: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaIDNullableFilterFromGraphQL(input);
        const expected = { equals: input.equals };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the in field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { in: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaIDNullableFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { in: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaIDNullableFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { in: ['value'] };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaIDNullableFilterFromGraphQL(input);
        const expected = { in: input.in };
        expect(received).toEqual(expected);
      });
    });
  });
});
