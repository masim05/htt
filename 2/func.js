const func = (s, a, b) => {
  if (!s.length) return -1;
  let aIndex = s.lastIndexOf(a);
  let bIndex = s.lastIndexOf(b);
  return (aIndex > bIndex) ? aIndex : bIndex;
};

module.exports = { func };
