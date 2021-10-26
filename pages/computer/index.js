// index.js
// const app = getApp()
const { calcFuncs } = require("../../operationRules/index");
const calcIcon = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  },
  numExp = new RegExp(/[0-9.]+/, "g");
Page({
  data: {
    calcList: [],
    calaExpression: "",
    result: 0,
  },
  onInputFunc(e) {
    // 输入数字
    let num = e.detail,
      list = this.data.calcList,
      lastItem = list[list.length - 1];

    console.log(list, "sss", lastItem, numExp, /[0-9.]+/.test(lastItem));
    if (/[0-9.]+/.test(lastItem)) {
      if (num === "." && lastItem.indexOf(".") >= 0) {
        lastItem = lastItem;
      } else {
        lastItem = lastItem + num;
        list.splice(list.length - 1, 1, lastItem);
      }
    } else {
      list.push(num);
    }
    this.setData(
      {
        calcList: list,
      },
      () => {
        this.updateView();
      }
    );
  },
  updateView() {
    let list = this.data.calcList;
    this.setData({
      calaExpression: list
        .map((item) => {
          /[a-zA-Z]+/g.test(item) && (item = calcIcon[item]);
          return item;
        })
        .join(""),
      result: list.length > 2 && this.calcResult(),
    });
  },
  calcRule({ detail }) {
    let { key } = detail,
      list = this.data.calcList,
      lastItem = list[list.length - 1];
    // 加入运算规则
    /[a-zA-Z]+/g.test(lastItem) && list.length > 0
      ? list.splice(list.length - 1, 1, key)
      : list.push(key);
    this.setData(
      {
        calcList: list,
      },
      this.updateView
    );
  },

  deleteCalcListItem() {
    let list = this.data.calcList,
      lastItem = list[list.length - 1];
    if (list.length < 1) return;
    //  是数字且十位数以上
    if (/[0-9.]+/g.test(lastItem) && lastItem.length > 1) {
      lastItem = lastItem.slice(0, lastItem.length - 1);
      list.splice(list.length - 1, 1, lastItem);
    } else {
      list = list.slice(0, list.length - 1);
    }
    this.setData(
      {
        calcList: list,
      },
      this.updateView
    );
  },
  // 归零
  cancel() {
    this.setData(
      {
        calcList: [],
      },
      this.updateView
    );
  },
  calcResult() {
    let list = this.data.calcList,
      calcMark = "";
    this.setData({
      result: list.reduce(function (prev, cur) {
        if (/[a-zA-Z]+/g.test(cur)) {
          calcMark = cur;
          return prev;
        } else {
          return calcFuncs.simpleCalc({
            lastNum: prev,
            newNum: cur,
            rule: calcMark,
          });
        }
      }),
    });
  },
});
