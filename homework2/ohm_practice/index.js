const ohm = require("ohm-js");

function isCanadianPostalCode(s) {
  const grammar = ohm.grammar(`CPC {
        c = firstletter digit secondletter " " digit secondletter digit
        firstletter = "A" | "B" | "C" | "E" | "G" | "H" | "J" .. "N" | "P" | "R" | "S" | "T" | "V" | "X" | "Y"
        secondletter = "A" | "B" | "C" | "E" | "G" | "H" | "J" .. "N" | "P" | "R" | "S" | "T" | "V" .. "Z"
    }`);
  return grammar.match(s).succeeded();
}

function isVisa(s) {
  const grammar = ohm.grammar(`isVisa {
        c = "4" d d d d d d d d d d d d (d d d)?
        d = digit
    }`);
  return grammar.match(s).succeeded();
}

//FIX
function isMasterCard(s) {
  const grammar = ohm.grammar(`isMastercard {
        card = "5" "1".."5" d d d12     --fives
         | "222" "1".."9" d12       --range2221_2229
         | "22" "3".."9" d d12      --range2230_2299
         | "2" "3".."6" d d d12     --range2300_2699
         | "27" "0".."1" d d12    --range2700_2719
         | "2720" d12               --range2720
        d12 = d d d d d d d d d d d d
        d = digit
    }`);
  return grammar.match(s).succeeded();
}

function isEightThroughTwentyNine(s) {
  const grammar = ohm.grammar(`eightToTwentyNine {
        start = single | double
        single = "8" | "9"
        double = "1" digit | "2" digit
    }`);
  return grammar.match(s).succeeded();
}

function isMLComment(s) {
  const grammar = ohm.grammar(`mlComment {
        comment = "(*"  middle*  "*)"
        middle = "*" ~")" | ~"*" any
    }`);
  return grammar.match(s).succeeded();
}

function isNotThreeEndingInOO(s) {
  const grammar = ohm.grammar(`notThreeEndingInOO {
        string =  (morethanthree | threeletters | lessthanthree)?
        latinLetters = "a".."z"|"A".."Z"
        morethanthree = latinLetters latinLetters latinLetters latinLetters latinLetters*
        lessthanthree = latinLetters? latinLetters?
        threeletters = latinLetters ~lettero latinLetters latinLetters
        lettero = caseInsensitive<"oo">
        
}`);
  return grammar.match(s).succeeded();
}

function isDivisibleBy64(s) {
  const grammar = ohm.grammar(`divBy64 {
        bin = numbers
              | zeroes
        zeroes = "0" zeroes --many_zeroes
                | "0"
        numbers = "1" "0" "0" "0" "0" "0" "0" --ending
              | "0" numbers --preceding_zero
              | "1" numbers --preceding_one
    }`);
  return grammar.match(s).succeeded();
}

function isNotDogDoorDenNoLookAround(s) {
  const grammar = ohm.grammar(`isNotDogDoorDenNoLookAround {
    string = (~"d") (latinLetters*) -- doesNotBeginWithD
    | "d"(~("o"|"e"))latinLetters* --doesntBeginWithdoOrde
    | "de"(~"n")(latinLetters*) --doesntBeginWithden
    | "den" (latinLetters+) --includesden
    | "do"(~("o"|"g"))latinLetters* --doesntBeginWithdog
    | "dog" (latinLetters+) --includesdog
    | "doo"(~"r")(latinLetters*) --doesntBeginWith
    | "door" (latinLetters+) --doesntBeginWithDoor
    latinLetters = "a".."z"|"A".."Z"
  }`);
  return grammar.match(s).succeeded();
}

// CHANGE SO NON-LATIN LETTERS ARENT ACCEPTED CUZ LETTER IS
//FOR ALL UNICODE
// "A".."Z"
function isNotDogDoorDenWithLookAround(s) {
  const grammar = ohm.grammar(`isNotDogDoorDenWithLookAround {
      string = (~(("dog"end) | ("den"end) | ("door"end)))latinLetters*
      latinLetters = "a".."z"|"A".."Z"
  }`);
  return grammar.match(s).succeeded();
}

function isAdaFloat(s) {
  const grammar = ohm.grammar(`isAdaFloat {
        number = numeral (basedliteral | decimalliteral)
        basedliteral = "#" basednumeral+ ("." basednumeral)? "#" exponent?
        basednumeral = extendeddigit ("_" extendeddigit+)*
        decimalliteral = ("." numeral)? exponent?
        numeral = digit+ ("_" digit+)*
        exponent = caseInsensitive<"e"> ("-" | "+"?) numeral
        extendeddigit = digit | caseInsensitive<"a"> | caseInsensitive<"b"> | caseInsensitive<"c"> | caseInsensitive<"d"> | caseInsensitive<"e"> | caseInsensitive<"f">
}`);
  return grammar.match(s).succeeded();
}

module.exports = {
  isCanadianPostalCode,
  isVisa,
  isMasterCard,
  isDivisibleBy64,
  isEightThroughTwentyNine,
  isMLComment,
  isNotThreeEndingInOO,
  isNotDogDoorDenNoLookAround,
  isNotDogDoorDenWithLookAround,
  isAdaFloat
};
