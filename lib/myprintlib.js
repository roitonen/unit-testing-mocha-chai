/**
 * Beautiful console output library with colors and formatting.
 * Provides functions for printing headers, footers, sections, results, and errors.
 * @module printlib
 */

/**
 * ANSI color codes for console output
 */
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

/**
 * Prints a beautiful header with the given text.
 * @param {string} text - The text to display in the header
 * @param {string} [emoji='🧮'] - Optional emoji to display (default: 🧮)
 * @param {number} [emojiWidth=2] - Display width of the emoji in terminal (default: 2)
 * @example printHeader('MY TESTS'); // prints header with "MY TESTS"
 * @example printHeader('UNIT TESTS', '🧪'); // prints header with custom emoji
 * @example printHeader('TEST', 'X', 1); // prints header with regular character
 */
function printHeader(text, emoji = '🧮', emojiWidth = 2) {
  const width = 50;
  const contentLength = text.length + 2 * emojiWidth + 4; // text + 2 emojis + 4 spaces
  const totalPadding = width - contentLength;
  const leftPad = ' '.repeat(Math.floor(totalPadding / 2));
  const rightPad = ' '.repeat(Math.ceil(totalPadding / 2));
  
  console.log('\n' + colors.bright + colors.cyan + '╔' + '═'.repeat(width) + '╗');
  console.log('║' + leftPad + emoji + '  ' + text + '  ' + emoji + rightPad + '║');
  console.log('╚' + '═'.repeat(width) + '╝' + colors.reset);
}

/**
 * Prints a beautiful footer with the given text.
 * @param {string} text - The text to display in the footer
 * @param {string} [emoji='✨'] - Optional emoji to display (default: ✨)
 * @param {number} [emojiWidth=2] - Display width of the emoji in terminal (default: 2)
 * @example printFooter('All tests passed!'); // prints footer with success message
 * @example printFooter('Done!', '🎉'); // prints footer with custom emoji
 * @example printFooter('Done!', 'X', 1); // prints footer with regular character
 */
function printFooter(text, emoji = '✨', emojiWidth = 2) {
  const width = 50;
  const contentLength = text.length + 2 * emojiWidth + 2; // text + 2 emojis + 2 spaces
  const totalPadding = width - contentLength;
  const leftPad = ' '.repeat(Math.floor(totalPadding / 2));
  const rightPad = ' '.repeat(Math.ceil(totalPadding / 2));
  
  console.log('\n' + colors.cyan + '═'.repeat(width) + colors.reset);
  console.log(colors.green + leftPad + emoji + ' ' + text + ' ' + emoji + rightPad + colors.reset);
  console.log(colors.cyan + '═'.repeat(width) + colors.reset + '\n');
}

/**
 * Prints a section header with the given title.
 * @param {string} title - The section title to display
 * @example printSection('➕ ADDITION'); // prints section header
 */
function printSection(title) {
  console.log('\n' + colors.cyan + '═'.repeat(50) + colors.reset);
  console.log(colors.bright + colors.blue + '  ' + title + colors.reset);
  console.log(colors.cyan + '═'.repeat(50) + colors.reset + '\n');
}

/**
 * Prints a successful operation result.
 * @param {string} operation - The operation description
 * @param {*} result - The result value
 * @example printResult('add(5, 3)', 8); // prints: ✓ add(5, 3) = 8
 */
function printResult(operation, result) {
  console.log(colors.green + '✓ ' + colors.reset + operation + colors.yellow + ' = ' + result + colors.reset);
}

/**
 * Prints an error message.
 * @param {string} operation - The operation that failed
 * @param {string} error - The error message
 * @example printError('divide(10, 0)', 'Division by zero'); // prints error with ✗
 */
function printError(operation, error) {
  console.log(colors.red + '✗ ' + colors.reset + operation + colors.red + ' → Error: ' + error + colors.reset);
}

/**
 * Prints a success message in green.
 * @param {string} message - The message to print
 * @example printSuccess('Test passed!'); // prints message in green
 */
function printSuccess(message) {
  console.log(colors.green + message + colors.reset);
}

/**
 * Prints a warning message in yellow.
 * @param {string} message - The message to print
 * @example printWarning('Deprecated function'); // prints message in yellow
 */
function printWarning(message) {
  console.log(colors.yellow + message + colors.reset);
}

/**
 * Prints an info message in cyan.
 * @param {string} message - The message to print
 * @example printInfo('Loading...'); // prints message in cyan
 */
function printInfo(message) {
  console.log(colors.cyan + message + colors.reset);
}

module.exports = {
  colors,
  printHeader,
  printFooter,
  printSection,
  printResult,
  printError,
  printSuccess,
  printWarning,
  printInfo
};