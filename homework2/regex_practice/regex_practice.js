function isCanadianPostalCode(s){
  return /^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(s);
}
function isVisa(s) {
  return /^4(\d{15}|\d{12})$/.test(s);
}
function isMasterCard(s) {
  return /^5[1-5](\d){14}$/.test(s);
}
function isEightThroughTwentyNine(s){
  return /^([8-9]|[12]\d)$/.test(s);
}
function isMLComment(s){
  return /^\(\*(\*(?!\))|[^\*])*\*\)$/.test(s);
}

function isNotThreeEndingInOO(s){
  return /^(^(?![A-Z]oo$)[A-Z]*)$/i.test(s);
}

function isDivisibleBy64(s){
  return /^((0+)|([01]*10{6}))$/.test(s);
}

function isNotDOgDoorDenNoLookAround(s){
  return /^(([^d]([A-Za-z]*))*|d[^(eo)]*|do[^g]|doo[^r]*|door([A-Za-z]+)|dog([A-Za-z]+)|do[^(go)]*|de[^n]*|den([A-Za-z]+))$/.test(s);
}

//COMMENTED OUT IN EXPORTS. NOT PASSING
function isNotDOgDoorDenWithLookAround(s) {
  return /^(?!(dog$|den$|door$)[A-Za-z]*)$/.test(s);
}

function isAdaFloat(s){
  return /^((\d+(_\d+)*#((\d|[a-fA-F])+(_?(\d|[a-fA-F]))*(\.(\d|[a-fA-F])(_(\d|[a-fA-F]))*)?#([eE]\+?(\d+(_\d+)*)|[eE]-(\d+(_\d+)*))?))|((\d+(_\d+)*(\.\d+(_\d+)*)?)([eE]\+?(\d+(_\d+)*)|[eE]-(\d+(_\d+)*))?))$/.test(s);
}



module.exports = {isCanadianPostalCode, isVisa, isMasterCard, isEightThroughTwentyNine, isMLComment, isNotThreeEndingInOO, isDivisibleBy64, isAdaFloat, isNotDOgDoorDenNoLookAround};
