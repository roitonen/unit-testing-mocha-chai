// Import calculator functions from mylib
const { add, subtract, multiply, divide } = require('../lib/mylib');

// Import print functions from myprintlib
const {
  printHeader,
  printFooter,
  printSection,
  printResult,
  printError
} = require('../lib/myprintlib');

// Main demo
printHeader('MYLIB LIBRARY DEMO');

// ADDITION Examples
printSection('➕ ADDITION');
printResult('add(5, 3)', add(5, 3));
printResult('add(100, 250)', add(100, 250));
printResult('add(-10, 5)', add(-10, 5));
printResult('add(3.14, 2.86)', add(3.14, 2.86));

// SUBTRACTION Examples
printSection('➖ SUBTRACTION');
printResult('subtract(10, 4)', subtract(10, 4));
printResult('subtract(100, 75)', subtract(100, 75));
printResult('subtract(5, 10)', subtract(5, 10));
printResult('subtract(0, 5)', subtract(0, 5));

// MULTIPLICATION Examples
printSection('✖️  MULTIPLICATION');
printResult('multiply(6, 7)', multiply(6, 7));
printResult('multiply(12, 12)', multiply(12, 12));
printResult('multiply(-5, 3)', multiply(-5, 3));
printResult('multiply(2.5, 4)', multiply(2.5, 4));

// DIVISION Examples
printSection('➗ DIVISION');
printResult('divide(15, 3)', divide(15, 3));
printResult('divide(100, 4)', divide(100, 4));
printResult('divide(7, 2)', divide(7, 2));
printResult('divide(1, 3)', divide(1, 3));

// ERROR HANDLING Examples
printSection('⚠️  ERROR HANDLING');

// Invalid input type
try {
  const result = add('5', 3);
  printResult('add("5", 3)', result);
} catch (error) {
  printError('add("5", 3)', error.message);
}

try {
  const result = multiply(5, null);
  printResult('multiply(5, null)', result);
} catch (error) {
  printError('multiply(5, null)', error.message);
}

// Division by zero
try {
  const result = divide(10, 0);
  printResult('divide(10, 0)', result);
} catch (error) {
  printError('divide(10, 0)', error.message);
}

try {
  const result = divide(0, 0);
  printResult('divide(0, 0)', result);
} catch (error) {
  printError('divide(0, 0)', error.message);
}

// COMPLEX CALCULATIONS
printSection('🔢 COMPLEX CALCULATIONS');

const a = 10;
const b = 5;
const c = 2;

const result1 = add(multiply(a, b), c);
printResult('add(multiply(10, 5), 2)', result1);

const result2 = divide(subtract(100, 20), 4);
printResult('divide(subtract(100, 20), 4)', result2);

const result3 = multiply(add(3, 7), subtract(10, 5));
printResult('multiply(add(3, 7), subtract(10, 5))', result3);

// Footer
printFooter("That's all! Enjoy using the library!");