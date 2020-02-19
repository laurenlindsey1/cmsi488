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
  return /^\(\*(\*(?!\))|[^\*])*\*\)$/.test(s);
  // return /^\(\*(?!\*\))\*\)$/.test(s);
}

// TOAL TO CHECK 

function isNotThreeEndingInOO(s){
  return /^([\w](?![oO][oO]))*$/.test(s);
}

function isDivisibleBy64(s){
  return /^((0+)|([01]*10{6}))$/.test(s);
}

function isNotDOgDoorDenNoLookAround(s){
  return /^(([^d](\w*))*|d[^(eo)]*|do[^g]|doo[^r]*|door(\w+)|dog(\w+)|do[^(go)]*|de[^n]*|den(\w+))$/.test(s);
}

function isAdaFloat(s){
  return /^((\d+(_\d+)*#((\d|[a-fA-F])+(_?(\d|[a-fA-F]))*(\.(\d|[a-fA-F])(_(\d|[a-fA-F]))*)?#([eE]\+?(\d+(_\d+)*)|[eE]-(\d+(_\d+)*))?))|((\d+(_\d+)*(\.\d+(_\d+)*)?)([eE]\+?(\d+(_\d+)*)|[eE]-(\d+(_\d+)*))?))$/.test(s);
}



module.exports = {isCanadianPostalCode, isVisa, isMasterCard, isEightThroughTwentyNine, isMLComment, isNotThreeEndingInOO, isDivisibleBy64, isAdaFloat, isNotDOgDoorDenNoLookAround};