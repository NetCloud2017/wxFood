// index.js
// const app = getApp()
const {
calcFuncs
} = require('../../operationRules/index')
Page({
  data: {
    currentNum: 0, 
    currentRule: null,
    oldNum: 0,
  },
  onInputFunc (e)  {
    let  num= e.detail, oldNum = this.data.currentNum || '';
    this.setData({
      currentNum: oldNum + num
    })
  },
  calcRule ({detail}) {
    this.setData({
      currentNum: 0,
      oldNum: this.data.currentNum,
      currentRule: detail
    })
  },
  //  计算结果
  calcResult () {
    let {
      currentNum,
      oldNum,
      currentRule
    } = this.data;
    console.log(currentNum,
      oldNum,
      currentRule);
    this.setData({
      currentNum: calcFuncs.simpleCalc({newNum: currentNum, lastNum:oldNum, rule: currentRule}),
      oldNum: 0,
      currentRule: null
    })
  },
  // deleteNum () {

  // },
  cancel () {
    this.setData({
      currentNum: 0, 
      currentRule: null,
      oldNum: 0,
    })
  }
});
