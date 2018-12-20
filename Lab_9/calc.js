function calc(a, b, op) {
    switch (op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = a / b;         
    }    
  return res;
};

console.log(calc(5, 4, "*"));

module.exports = calc;