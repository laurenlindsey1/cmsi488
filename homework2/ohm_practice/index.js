const ohm = require("ohm-js");

function isCanadianPostalCode(s) {
    const grammar = ohm.grammar(`CPC {
        c = firstletter digit secondletter space digit secondletter digit
        firstletter = "A" | "B" | "C" | "E" | "G" | "H" | "J" .. "N" | "P" | "R" | "S" | "T" | "V" | "X" | "Y"
        secondletter = "A" | "B" | "C" | "E" | "G" | "H" | "J" .. "N" | "P" | "R" | "S" | "T" | "V" .. "Z"
    }`);
    return grammar.match(s).succeeded();
}

function isVisa(s) {
    const grammar = ohm.grammar(`isVisa {
        c = "4" d d d d d d d d d d d d d d d --fifteen
        | "4" d d d d d d d d d d d d --twelve
        d = digit
    }`);
    return grammar.match(s).succeeded();
}

//FIX
function isMasterCard(s) {
    const grammar = ohm.grammar(`isMastercard {
        c = "5" short d d d d d d d d d d d d d d
        short = "1" | "2" | "3" | "4" |"5"
        d = digit
    }`);
    return grammar.match(s).succeeded();
}


function isDivisibleBy64(s){
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

function isEightThroughTwentyNine(s){
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
        morethanthree = any any any any any*
        lessthanthree = any? any?
        threeletters = any ~lettero any any
        lettero = caseInsensitive<"oo">
}`);
    return grammar.match(s).succeeded();
}

module.exports = {isCanadianPostalCode, isVisa, isMasterCard, isDivisibleBy64,
   isEightThroughTwentyNine, isMLComment, isNotThreeEndingInOO};
