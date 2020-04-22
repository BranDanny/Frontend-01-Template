const regNumberRule = {
  decimal: /^(((0|([1-9]([0-9]+)?))\.([0-9]+)?((e|E)((\+|\-)?([0-9]+)))?)|(\.([0-9]+)((e|E)((\+|\-)?([0-9]+)))?)|((0|([1-9]([0-9]+)?))((e|E)((\+|\-)?([0-9]+)))?))$/,
  binary: /^(0(b|B)((0|1)|((0|1)+)))$/,
  octal: /^(0(o|O)([0-7]|([0-7]+)))$/,
  hex: /^(0(x|X)([0-9a-fA-F]|([0-9a-fA-F]+)))$/,
};

const regStringRule = {
  singleQuote: /^'.*'$/,
  doubleQuote: /^".*"$/,
};

const UTF8Encoding = (str) => {
  let arr = str.split("");
  let codes = arr.map((item) => `\\u${item.charCodeAt().toString(16)}`);
  console.log(codes.join(""));
};
