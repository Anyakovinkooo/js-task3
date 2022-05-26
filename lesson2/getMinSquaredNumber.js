export const getMinSquaredNumber = (num) => {
  let b = [];
  if (Array.isArray(num) && num.length !== 0) {
    for (var i = 0; i < num.length; i++) {
      let a = num[i];
      if (a != null) {
        b.push(a * a);
      }
    }
    return Math.min.apply(null, b);
  }
  return null;
};
