const { fizzBuzz } = require('./index');
const fixtures = require('./fixtures');

const baseRules = [
  { condition: (i) => i % 3 === 0, output: 'Fizz' },
  { condition: (i) => i % 5 === 0, output: 'Buzz' },
];

describe('fizzBuzz', () => {
  test('should return original', () => {
    expect(fizzBuzz(1, 100, baseRules)).toEqual(fixtures.fizzBuzz);
  });

  describe('step 1', () => {
    test('should work with range 1 to 20', () => {
      expect(fizzBuzz(1, 20, baseRules)).toEqual(fixtures.fizzBuzzFrom1to20);
    });

    test('should work with range 15 to 50', () => {
      expect(fizzBuzz(15, 50, baseRules)).toEqual(fixtures.fizzBuzzFrom15to50);
    });
  });

  describe('step 2', () => {
    const fooRule = { condition: (i) => i % 7 === 0, output: 'Foo' };
    const booRule = { condition: (i) => i % 11 === 0, output: 'Boo' };

    test('should work with additional Foo rule', () => {
      expect(fizzBuzz(1, 100, [...baseRules, fooRule])).toEqual(
        fixtures.fizzBuzzFoo
      );
    });

    test('should work with additional Boo rule', () => {
      expect(fizzBuzz(1, 100, [...baseRules, booRule])).toEqual(
        fixtures.fizzBuzzBoo
      );
    });

    test('should work with both additional Foo and Boo rules', () => {
      expect(fizzBuzz(1, 100, [...baseRules, fooRule, booRule])).toEqual(
        fixtures.fizzBuzzFooBoo
      );
    });
  });

  describe('step 3', () => {
    smallRule = { condition: (i) => i < 16, output: 'Small' };
    bigRule = { condition: (i) => i > 95, output: 'Big' };

    test('should work with Small rule', () => {
      expect(fizzBuzz(1, 100, [smallRule, ...baseRules])).toEqual(
        fixtures.smallFizzBuzz
      );
    });

    test('should work with Big rule', () => {
      expect(fizzBuzz(1, 100, [bigRule, ...baseRules])).toEqual(
        fixtures.bigFizzBuzz
      );
    });
  });

  describe('step 4', () => {
    const fizzRule = { condition: (i) => i % 3 === 0, output: 'Fizz' };
    const buzzRule = { condition: (i) => i % 5 === 0, output: 'Buzz' };

    test('should work as BuzzFizz', () => {
      expect(fizzBuzz(1, 100, [buzzRule, fizzRule])).toEqual(fixtures.buzzFizz);
    });

    test('should work as BuzzSmallFizz', () => {
      expect(fizzBuzz(1, 100, [buzzRule, smallRule, fizzRule])).toEqual(
        fixtures.buzzSmallFizz
      );
    });
  });

  describe('step 5', () => {
    const ftwRule = {
      condition: (i) => i % 3 === 0 && i % 5 === 0,
      output: 'FTW',
    };

    const ggRule = {
      condition: (i) => i % 3 === 0 || i % 5 === 0,
      output: 'GG',
    };

    test('should work with rule FTW only', () => {
      expect(fizzBuzz(1, 100, [ftwRule])).toEqual(fixtures.ftw);
    });

    test('should work with rule GG only', () => {
      expect(fizzBuzz(1, 100, [ggRule])).toEqual(fixtures.gg);
    });
  });
});
