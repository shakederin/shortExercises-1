function first(a, b, c) {
  if (second(a) + second(b) === second(c)) {
    return true;
  }
}

function second(parameter) {
  return third(parameter, parameter);
}

function third(parameterOne, parameterTwo) {
  return parameterOne * parameterTwo;
}

first(3, 4, 5);
