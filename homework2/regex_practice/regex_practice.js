function isCanadianPostalCode(s) {
  return /^[A-CEGHJ-NPR-TVXY]\d[A-CEGHJ-NPR-TV-Z] \d[A-CEGHJ-NPR-TV-Z]\d$/.test(
    s
  );
}

function isVisa(s) {
  return /^4[0-9]{12}(?:[0-9]{3})?$/.test(s);
}

function isMasterCard(s) {
  return /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/.test(
    s
  );
}

function isEightThroughTwentyNine(s) {
  return /^([8-9]|[12]\d)$/.test(s);
}

function isMLComment(s) {
  return /^\(\*(\*(?!\))|[^\*])*\*\)$/.test(s);
}

function isNotThreeEndingInOO(s) {
  return /^(^(?![A-Z]oo$)[A-Z]*)$/i.test(s);
}

function isDivisibleBy64(s) {
  return /^((0+)|([01]*10{6}))$/.test(s);
}

function isNotDogDoorDenNoLookAround(s) {
  return new RegExp(
    `^(
    [A-Za-ce-z]([A-Za-z]*)|
    d([A-Za-df-np-z]([A-Za-z]*))?|
    de([A-Za-mo-z]([A-Za-z]*))?|
    den([A-Za-z]+)|
    do([A-Za-fh-np-z]([A-Za-z]*))?|
    dog([A-Za-z]+)|
    doo([A-Za-qs-z]([A-Za-z]*))?|
    door([A-Za-z]+)
  )?$`.replace(/\s+/g, "")
  ).test(s);
}

function isNotDogDoorDenWithLookAround(s) {
  return /^(?!(dog$|den$|door$))[A-Za-z]*$/.test(s);
}

function isAdaFloat(s) {
  return /^((\d+(_\d+)*#((\d|[a-fA-F])+(_?(\d|[a-fA-F]))*(\.(\d|[a-fA-F])(_(\d|[a-fA-F]))*)?#([eE]\+?(\d+(_\d+)*)|[eE]-(\d+(_\d+)*))?))|((\d+(_\d+)*(\.\d+(_\d+)*)?)([eE]\+?(\d+(_\d+)*)|[eE]-(\d+(_\d+)*))?))$/.test(
    s
  );
}

module.exports = {
  isCanadianPostalCode,
  isVisa,
  isMasterCard,
  isEightThroughTwentyNine,
  isMLComment,
  isNotThreeEndingInOO,
  isDivisibleBy64,
  isAdaFloat,
  isNotDogDoorDenNoLookAround,
  isNotDogDoorDenWithLookAround
};
