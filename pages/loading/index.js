// pages/loading/index.js
const { data } = require("./data");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    toTop: 0,
    height: "auto",
    showIcon: true,
    refresh: false,
    curentPage: 1,
    pageSize: 10,
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mockRequestData()
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          height: "height: " + result.windowHeight + "px",
        });
      },
    });
  },

  scrollToTop() {
    this.setData({
      toTop: 0,
    });
  },
  onScroll(e) {
    this.setData({
      showIcon: e.detail.scrollTop < 300,
    });
  },

  // 模拟请求数据
  mockRequestData() {
    let { curentPage, list, pageSize } = this.data;
    list = list.concat(data.slice(list.length, list.length + pageSize));
    
    let timer = setTimeout(() => {
      clearTimeout(timer);
      //  复原刷新
      this.setData({
        list,
        refresh: false,
      });
    }, 1000);
  },
  _onPullDownRefresh: function () {
    this.setData({
      list: [],
    });
    this.mockRequestData();
  },

  /**
   * 下拉分页加载
   * 数
   */

  _onReachBottom() {
    this.setData({
      curentPage: ++this.data.curentPage,
    });
    this.mockRequestData();
  },
});
