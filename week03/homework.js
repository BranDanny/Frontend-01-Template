function convertStringToNumber(string, x) {
  if (arguments.length < 2) x = 10;

  var chars = string.split("");
  var number = 0;

  var i = 0;
  while (
    i < chars.length &&
    chars[i] != "." &&
    chars[i] != "e" &&
    chars[i] != "E"
  ) {
    number = number * x;
    number += chars[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }

  if (chars[i] === ".") i++;

  var fraction = 1;
  while (i < chars.length && chars[i] != "e" && chars[i] != "E") {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
    i++;
  }

  if (chars[i] === "e" || chars[i] === "E") i++;

  var exponent = "";
  while (i < chars.length) {
    exponent += chars[i];
    i++;
  }

  number = number * x ** exponent;

  return number;
}

function convertNumberToString(number, x) {
  if (arguments.length < 2) x = 10;

  if (number === 0) return "0";

  if (
    !/^([1-9][0-9]*|0)?((\.[0-9]*)?|(\.[0-9]*)([eE][+-]?[0-9]+)?)$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/.test(
      number
    )
  ) {
    throw "Uncaught SyntaxError: Invalid or unexpected token";
  }

  var integer = Math.floor(number);
  var fraction = number - integer;
  var string = "";
  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }

  if (fraction) {
    string += ".";
    while (fraction && !/\.\d{16}$/.test(string)) {
      fraction *= x;
      string += `${Math.floor(fraction)}`;
      fraction -= Math.floor(fraction);
    }
  }

  return string;
}
