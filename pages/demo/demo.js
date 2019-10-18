// pages/demo/demo.js
Page({
    data: {
      todos:{},
        compile:false,
        editVal:'',
        idName:''
  },
    onLoad: function (options) {
    console.log(options)
    const self = this
      const {id}  = options
      self.setData({
          idName:options
      })
      wx.request({
          url:`https://koo-todolist.leanapp.cn/api/v1/todos/${id}`,
          method:'GET',
          success(res){
              // console.log(res)
            const {data} = res.data
              self.setData({
                  todos:data,
                  editVal:data.content
              })
          }
    })
        // console.log(editVal)
  },
    changeVal(e){
    this.setData({
        editVal:e.detail.value
    })
    },
    editButton(e){
      const val = this.data.editVal
        const id = this.data.idName.id
      const self = this
    if (self.data.compile){
      // const val = this.data.editVal
        wx.request({
            url:`https://koo-todolist.leanapp.cn/api/v1/todos/${id}`,
            method:'POST',
            data:{
              content:val
            },
            success(res){
                console.log(res)
                self.setData({
                    compile:false
                })
                wx.navigateBack({
                    delta: '1'
                })
            }
        })

    }
    else {
        this.setData({
            compile:true
        })
    }
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