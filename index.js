function fizzBuzz(min = 1, max = 100, rules = []) {
  let output = [];
  for (let i = min; i <= max; i++) {
    let str = '';

    rules.forEach((rule) => {
      if (rule.condition(i)) {
        str += rule.output;
      }
    });

    output.push(str ? str : i);
  }

  return output;
}

module.exports.fizzBuzz = fizzBuzz;
