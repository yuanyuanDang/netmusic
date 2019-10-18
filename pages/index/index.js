//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        // background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoPlay: true,
        circular: true,
        interval: 2000,
        duration: 500,
        previousMargin: 0,
        nextMargin: 0,
        background:[
            {picture:'/image/swiper/1.jpg'},
            {picture:'../../image/swiper/2.jpg'},
            {picture:'../../image/swiper/3.jpg'},
            {picture:'../../image/swiper/4.jpg'}
            ],
        musicItem:[
            {musicPic:'/image/pic/1.jpg',musicName:'听说',musicAlbum:'林俊杰-她说 概念自选专辑'},
            {musicPic:'/image/pic/2.jpg',musicName:'曹操',musicAlbum:'林俊杰-她说 概念自选专辑'},
            {musicPic:'/image/pic/3.jpg',musicName:'修炼爱情',musicAlbum:'林俊杰-她说 概念自选专辑'},
            {musicPic:'/image/pic/4.jpg',musicName:'江南',musicAlbum:'林俊杰-她说 概念自选专辑'},
            {musicPic:'/image/pic/5.jpg',musicName:'我还想她',musicAlbum:'林俊杰-她说 概念自选专辑'},
            {musicPic:'/image/pic/6.jpg',musicName:'当你',musicAlbum:'林俊杰-她说 概念自选专辑'},
            {musicPic:'/image/pic/7.jpg',musicName:'可惜没有如果',musicAlbum:'林俊杰-她说 概念自选专辑'},
        ]

    },
    changeProperty: function (e) {
        var propertyName = e.currentTarget.dataset.propertyName
        var newData = {}
        newData[propertyName] = e.detail.value
        this.setData(newData)
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    }
})
