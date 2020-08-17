Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: '',

    seleNull:null,//设置的变量
    FacultyArr: ['資訊科技學院', '商學院', '法學院','中醫藥學院','酒店與旅遊管理學院','人文藝術學院','醫學院','國際學院','藥學院','先修'],//选项的值
    FacultyIndex: 0   //选项的索引
 },
 bindYearPickerChange: function(e) {
     console.log(this.data.FacultyArr[e.detail.value])
     this.setData({
       seleNull:'0',
       FacultyIndex: e.detail.value
     })
  },  

  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})