//logs.js
const util = require('../../utils/util.js')
// import Dialog from 'vant-weapp/dialog';
Page({
    data: {
    toDo:[],
      todoVal:[],
        lock: false
  },
    onShow: function () {
      const self = this
      wx.request({
          url:'https://koo-todolist.leanapp.cn/api/v1/todos',
          method:'GET',
          success (res) {
              const {data} = res.data
              console.log(res.data.data)
              self.setData({
                  toDo:data
              })
          }
      })
  },
    onChange(e){
      const self = this
        self.setData({
            todoVal:e.detail.value
        })
      // console.log(e)
      // console.log(self.data.value)
    },
    submit(){
      const self = this
        const value =self.data.todoVal
        if (value){
            wx.showLoading({
                title: '加载中',
            })

            wx.request({
                url:'https://koo-todolist.leanapp.cn/api/v1/todos',
                method:'POST',
                data:{
                    content:value
                },
                success(res){
                    wx.hideLoading()
                    self.setData({
                        todoVal:''
                    })
                    wx.request({
                        url:'https://koo-todolist.leanapp.cn/api/v1/todos',
                        method:'GET',
                        success (res) {
                            const {data} = res.data
                            console.log(res.data.data)
                            self.setData({
                                toDo:data
                            })
                        }
                    })
                }
            })
          }
        else {
            wx.showToast({
                title: '不能为空',
                icon: 'none',
                duration: 2000
            })
        }
    },
    tap: function(res) {
        //检查锁
        if (this.data.lock) {
            return;
        }
        const {id}=res.currentTarget.dataset
        const that = this
        // console.log(id)
        wx.navigateTo({
            url:`/pages/demo/demo?id=${id}`
        })

        console.log('触发了 tap')
    },
    touchend: function() {
        if (this.data.lock) {
            //开锁
            setTimeout(() => {
                this.setData({ lock: false });
            }, 100);
        }
    },
    longtap: function (res) {
        //锁住
        this.setData({lock: true});

        const {id}=res.currentTarget.dataset
        const self = this
        console.log(id)
        console.log('触发了 longtap')


        wx.showModal({
            title: '提示',
            content: '确定要取消吗?',
            success (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.request({
                        url:`https://koo-todolist.leanapp.cn/api/v1/todos/${id}/delete`,
                        method:'POST',
                        success (res) {
                            wx.request({
                                url:'https://koo-todolist.leanapp.cn/api/v1/todos',
                                method:'GET',
                                success (res) {
                                    const {data} = res.data
                                    console.log(res.data.data)
                                    self.setData({
                                        toDo:data
                                    })
                                }
                            })
                        }
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                    return
                }
            }
        })



    }
})
