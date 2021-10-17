export function display(qoute) {
  // Displays on the calculator
  document.getElementsByClassName("result")[0].value = qoute;
}

export function sqt(num) {
  return Math.pow(num, 0.5);
}
