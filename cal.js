let expression = '';

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(expression);
    if (result === undefined || isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid Input');
    }
    result = Math.round(result * 100000) / 100000; // Rounding to 5 decimal places
    document.getElementById('display').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}