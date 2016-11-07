var slide = {
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
    didLeft: function(e) {
    console.log("方式一")
  },
    didRight: function(e) {
    console.log("方式二")
  },
    didItem: function(e) {
    console.log("链接")
  }
}

var buttonLeft = {
    data:{
        primarySize:'default',
        loading:false,
        //背景色透明
        plain:false,
        //是否禁用
        disabled:false
    }
}

var buttonRight = {
    data:{
        primarySize:'default',
        loading:false,
        //背景色透明
        plain:false,
        //是否禁用
        disabled:false
    }
}


Page(slide)
Page(buttonLeft)
Page(buttonRight)