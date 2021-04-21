function stringIsValid(str) {
  if (str.length < 0) throw new Error()
  return true
}

function indexFirstBracketValid(str) {
  if (str < 0) throw new Error()

  return true
}

function wordAfterBracketValid(str) {
  if (!str) throw new Error()
}

function indexClosingBracketValid(str) {
  if (str < 0) throw new Error()
}

function findFirstStringInBracket(str) {
  try {
    stringIsValid(str)

    let indexFirstBracketFound = str.indexOf("(");

    indexFirstBracketValid(indexFirstBracketFound)

    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);

    wordAfterBracketValid(wordsAfterFirstBracket)

    wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);

    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

    indexClosingBracketValid(indexClosingBracketFound)

    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
  } catch(error) {
    return ""
  }

}