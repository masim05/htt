const verify = (text) => {
  let stack = [];
  for (let i = 0; i < text.length; i++) {
    let current = text[i];

    if ('()[]<>'.indexOf(current) < 0) continue;

    if ('([<'.indexOf(current) >= 0) stack[stack.length] = current;

    if (current == ')') (stack[stack.length - 1] == '(') ? stack.splice(-1, 1) : stack[stack.length] = current;
    if (current == ']') (stack[stack.length - 1] == '[') ? stack.splice(-1, 1) : stack[stack.length] = current;
    if (current == '>') (stack[stack.length - 1] == '<') ? stack.splice(-1, 1) : stack[stack.length] = current;
  }

  return stack.length ? 0 : 1;
};

module.exports = { verify };
