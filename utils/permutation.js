const combination = (num) => {
  return (number = num.reduce(
    (a, v) => a.concat(a.map((r) => [v].concat(r))),
    [[]]
  ));
};

console.log(combination([1, 2, 3]));
