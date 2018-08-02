Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider: {
      max: 960, // 总金额
      step: 6, // 平分
      width: 680, // 总宽度
      describe: true, // 价格区间
      blockImageWidth: 50,
      blockImageHeight: 50,
      activeColor: '#65e3b2', // 进度条选中色
      backgroundColor: '#eee',
      activeFont: '#5fe4b1', // 字体选中色
      fontColor: '#b2b2b2', // 默认色
    },
    price: '', // 价格区间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wxmSlider = this.selectComponent("#wxmSlider");
  },

  // 点击slider时调用
  sliderTap: function (e) {
    this.selectData()
  },

  // 开始滑动时
  sliderStart: function (e) {
  },

  // 正在滑动
  sliderChange: function (e) {
  },

  // 滑动结束
  sliderEnd: function (e) {
    this.selectData()
  },
  // 筛选结果
  selectData(){
    let value = Math.ceil(this.wxmSlider.properties.value)
    let max = this.data.slider.max;
    let step = this.data.slider.step;
    var describeArr = [];
    let oneNumber = parseInt(max/(step))
    if (max > 0 && step > 0) {
      for (let i = 0; i < step-1; i++) {
        describeArr[i] = oneNumber*i
      }
      describeArr.push(Number(max - oneNumber), '不限')
      this.price = this.getIndex(value, describeArr)
      console.log('筛选区间')
      console.log(this.price)
    }
  },
  // 取出数组区间
  getIndex(value, array){
    console.log(value)
    for(var i =0; i < array.length; i++){
      if(value < array[array.length-2]){
        if(value >= array[i] && value <= array[i+1]){
          let price = array[i] + ',' + array[i+1]
          return price
        }
      }else{
        let price = array[array.length - 2] + ',' + array[array.length - 1]
        return price
      }
    }
  },

  // 滑动取消 （左滑时滑到上一页面或电话等情况）
  sliderCancel: function (e) {
    console.log("sliderCancel")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})