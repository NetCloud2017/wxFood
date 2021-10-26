function simpleCalc({ newNum, lastNum, rule }) {
  let result = 0;
  switch (rule) {
    case "add":
      result = add(lastNum, newNum);
      break;
    case "multiply":
      result = multiply(lastNum, newNum);
      break;
    case "subtract":
      result = substract(lastNum, newNum);
      break;
    case "divide":
      result = divide(lastNum, newNum);
      break;
    default:
      result = 0;
  }
  return result;
}
// 加法
function add(num1, num2) {
  var r1, r2, m;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (num1 * m + num2 * m) / m;
}
// 减法
function substract(num1, num2) {
  var r1, r2, m;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((num1 * m - num2 * m) / m).toFixed(r1 >= r2 ? r1 : r2);
}
// 除法
function divide(num1, num2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = num1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    t2 = num2.toString().split(".")[1].length;
  } catch (e) {}
  r1 = Number(num1.toString().replace(".", ""));
  r2 = Number(num2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
// 乘法
function multiply(num1, num2) {
  var m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
module.exports.calcFuncs = {
  simpleCalc,
};
