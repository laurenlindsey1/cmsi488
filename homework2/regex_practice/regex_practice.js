function isCanadianPostalCode(s){
  return /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/.test(s);
}
function isVisa(s) {
  return /^4(\d){15}$/.test(s);
}
function isMasterCard(s) {
  return /^5[1-5](\d){14}$/.test(s);
}
function isEightThroughTwentyNine(s){
  return /^[8-9]|[12]\d$/.test(s);
}
function isMLComment(s){
  return /^\(\*(?!\*\)).*\*\)$/.test(s);
  // return /^\(\*(?!\*\))\*\)$/.test(s);
}

function isNotThreeEndingInOO(s){
  return /^([\w](?![oO][oO]))*$/.test(s);
}

function isDivisibleBy64(s){
  return /^((0+)|([01]*10{6}))$/.test(s);
}


module.exports = {isCanadianPostalCode, isVisa, isMasterCard, isEightThroughTwentyNine, isMLComment, isNotThreeEndingInOO, isDivisibleBy64};