function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr = expr.replace(/\s/g,"").split("");
    error(arr);
    function error(arr) {
      let isPaired = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
          isPaired++;
        }
        if (arr[i] === ")") {
          isPaired--;
        }
      }
      if (isPaired !== 0) {
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
    result = new Function("return " + expr.replace(/\s/g,""));
    return result();
}


module.exports = {
    expressionCalculator
}