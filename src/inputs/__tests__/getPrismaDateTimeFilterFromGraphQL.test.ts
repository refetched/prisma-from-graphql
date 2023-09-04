import { DateTimeFilterInput as GraphQLDateTimeFilterInput } from '@refetched/graphql-types';
import { getPrismaDateTimeFilterFromGraphQL } from '..';

describe('GIVEN the function', () => {
  let input: GraphQLDateTimeFilterInput;

  describe('AND the equals field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { equals: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { equals: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { equals: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { equals: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { equals: new Date() };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { equals: input.equals };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the gt field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { gt: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { gt: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { gt: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { gt: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { gt: new Date() };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { gt: input.gt };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the gte field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { gte: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { gte: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { gte: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { gte: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { gte: new Date() };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { gte: input.gte };
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
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { in: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { in: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { in: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { in: [new Date()] };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { in: input.in };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the lt field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { lt: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { lt: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { lt: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { lt: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { lt: new Date() };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { lt: input.lt };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the lte field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { lte: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { lte: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { lte: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { lte: undefined };
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { lte: new Date() };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaDateTimeFilterFromGraphQL(input);
        const expected = { lte: input.lte };
        expect(received).toEqual(expected);
      });
    });
  });
});
