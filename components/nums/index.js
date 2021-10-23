// components/nums/index.js
Component({

  data: {
    list: [
      1,2,3,4,5,6,7,8,9,0,"."
    ]
  },
  /**
   * 组件的方法列表
   */
 
  methods: {
    numTap ({target}) {
      this.triggerEvent('inputFunc', target.dataset.num + '')
    },
  
  }
})
