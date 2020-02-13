function isCanadianPostalCode(s){
  return /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/.test(s);
}
function isVisa(s) {
  return /^4(\d){15}$/.test(s);
}
function isMasterCard(s) {
  return /^5(\d){15}$/.test(s);
}
function isEightThroughTwentyNine(s){
  return /^[8-9]|[12]\d$/.test(s);
}
function isMLComment(s){
  return /^["*"][^"*"]*["*"]$/.test(s);
}
