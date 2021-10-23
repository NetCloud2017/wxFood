function  simpleCalc({newNum, lastNum, rule}) {
  let result  = 0, newN = (newNum + '').split('.'), lastN = (lastNum + '').split('.'), allPercentileLeng = (( newN[1] || '' ) + (lastN[1] || '')).length;

  // 精度处理
  newNum = +(newN[0] +( newN[1] || ''))
  lastNum = +(lastN[0] +( lastN[1] || ''))
console.log(newNum, lastNum, newN, lastN,allPercentileLeng );
  switch (rule) {
    case 'add':
      result = newNum + lastNum
    break;
    case 'multiply':  
    result = newNum * lastNum
    break;
    case 'subtract': 
    result = lastNum - newNum
    break;
    case 'divide': 
    result = lastNum / newNum
    break;
    default: 
    result = 0;
  }
  let resultNumLeng = (result + '').length;
  // 没有小数点则都是整数
  if (allPercentileLeng === 0) {
    result = result;
  } else {
    // 浮点数处理
    result = (result + '').split('').reverse()
    if (allPercentileLeng > resultNumLeng) {
      result = result.concat(new Array(allPercentileLeng - resultNumLeng).fill('0'));
    }
    result.splice(allPercentileLeng, 0, '.')
    result = result.reverse().join('')
 
  }
  return result;
}

module.exports.calcFuncs = {
  simpleCalc
}