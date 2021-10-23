// components/controls/index.js
Component({

  /**
   * 组件的初始数据
   */
  data: {
    marks: [
      {key: 'add', value: '+'},
      {key: 'subtract', value: '-'},
      {key: 'multiply', value: '×'},
      {key: 'divide', value: '÷'}
    ]
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    calcTab ({currentTarget}) {
      this.triggerEvent("calcRule", currentTarget.dataset.rule)
    }
  }
})
