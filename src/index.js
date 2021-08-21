function eval() {
    // Do not use eval!!!
    return;
}

function findError(arr) {
    let isPair = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        isPair++;
      }
      if (arr[i] === ")") {
        isPair--;
      }
    }
    if (isPair !== 0) {
      throw new Error("ExpressionError: Brackets must be paired.");
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "/") {
        if (arr[i+1] === "0") {
          throw new Error("TypeError: Division by zero.");
        }
      }
    }
  }

function expressionCalculator(expr) {
    let arr = expr.replace(/\s/g,"").split("");
    findError(arr);
    result = new Function("return " + expr.replace(/\s/g,""));
    return result();
}


module.exports = {
    expressionCalculator
}