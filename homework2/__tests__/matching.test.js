const assert = require('assert');
const regex_functions = require('../regex_practice/regex_practice');
const ohm_matching_functions = require('../ohm_practice/index');
const FIXTURE = {
  isCanadianPostalCode: {
    good: ['A7X 2P8', 'P8E 4R2', 'K1A 0B1', 'H0H 0H0', 'G3N 3M0'],
    bad: ['A7X   9B2', 'C7E9U2', '', 'Dog', 'DF87R', 'P8E P8E', 'ARE ARE', 'A8A 999', 'L4U 9Z0', 'H0H 0Q0', 'W8S 8F8'],
  },
  isVisa: {
    good: ['4128976567772613', '4089655522138888', '4696969696969'],
    bad: ['43333', '42346238746283746823', '3123456789012345', '', '412345678901234', '4273849573$6482'],
  },
  isMasterCard: {
    good: ['5100000000000000', '5294837679998888', '5594837679998888'],
    bad: ['5763777373890002', '513988843211541', '5432333xxxxxxxxx', '2294837679998888', '5994837679998888', '78'],
  },
  isAdaFloat: {
    good: ['1', '23_5', '4#20#', '13#fD34_2_1#', '1.3e2', '11_3.3_3_222E-199',
    '10e3_89', '89_3_634_8.3_3_222e-199_37', '3_4_2#ABC#', '23#E#'],
    bad: ['dog', '4fe', 'p#ii#', '_', '_33', '5__2', '9#88#E-1e3', '-6', '3#XY#', '23#E'],
  },
  isNotThreeEndingInOO: {
    good: ['', 'fog', 'Tho', 'food', 'oo', 'OO', 'oO', 'hooo'],
    bad: ['fOo', 'gOO', 'roo'],
  },
  isDivisibleBy64: {
    good: ['0', '1101000000', '000000', '0001000000', '1000000', '1111111111000000', '0000'],
    bad: ['1', '00000000100000', '1000000001', '100000', '1000001', '1000101'],
  },
  isEightThroughTwentyNine: {
    good: (Array(22).fill(0).map((x, i) => i + 8)),
    bad: ['3', '-0', '00009', 'dog', '361', '30', '7', 'SHANAYA'],
  },
  isMLComment: {
    good: ['(**)', '(*  *)', '(*756****)'],
    bad: ['', '(*)', '(* before (* inner *) after *)'],
  },
  isNotDOgDoorDenNoLookAround: {
    good: ['', 'dogs', 'doors', 'do', 'hotdog'],
    bad: ['dog', 'door', 'den'],
  },
};
// Looks funny, but you can probably figure out what it does
FIXTURE.isNotDOgDoorDenWithLookAround = FIXTURE.isNotDOgDoorDenNoLookAround;
function runTests(suiteName, suite) {
  describe(`In the ${suiteName} tester`, () => {
    Object.entries(suite).forEach(([name, matchingFunction]) => {
      describe(`the function ${name}`, () => {
        FIXTURE[name].good.forEach(s => {
          it(`accepts ${s}`, () => {
            assert.ok(matchingFunction(s));
          });
        });
        FIXTURE[name].bad.forEach(s => {
          it(`rejects ${s}`, () => {
            assert.ok(!matchingFunction(s));
          });
        });
      });
    });
  });
}
runTests('regex', regex_functions);
runTests('ohm', ohm_matching_functions);
