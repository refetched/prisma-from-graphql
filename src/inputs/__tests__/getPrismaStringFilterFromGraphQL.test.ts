import { StringFilterInput as GraphQLStringFilterInput } from '@refetched/graphql-types';
import { getPrismaStringFilterFromGraphQL } from '..';

describe('GIVEN the function', () => {
  let input: GraphQLStringFilterInput = {};

  describe('AND the contains field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { contains: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { contains: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { contains: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = { contains: input.contains };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the endsWith field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { endsWith: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { endsWith: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { endsWith: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = { endsWith: input.endsWith };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the equals field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { equals: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { equals: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { equals: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
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
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { gt: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { gt: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
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
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { gte: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { gte: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
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
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { in: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { in: ['value'] };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
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
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { lt: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { lt: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
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
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { lte: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { lte: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = { lte: input.lte };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the mode field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { mode: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { mode: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { mode: 'DEFAULT' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = { mode: 'default' };
        expect(received).toEqual(expected);
      });
    });
  });

  describe('AND the startsWith field', () => {
    describe('EQUALS null', () => {
      beforeEach(() => {
        input = { startsWith: null };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS undefined', () => {
      beforeEach(() => {
        input = { startsWith: undefined };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = {};
        expect(received).toEqual(expected);
      });
    });

    describe('EQUALS non nullish', () => {
      beforeEach(() => {
        input = { startsWith: 'value' };
      });

      test('THEN it should get the Prisma', () => {
        const received = getPrismaStringFilterFromGraphQL(input);
        const expected = { startsWith: input.startsWith };
        expect(received).toEqual(expected);
      });
    });
  });
});
