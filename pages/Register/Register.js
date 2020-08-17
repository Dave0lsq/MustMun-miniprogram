let app = getApp();  
const DB = wx.cloud.database().collection("usr")
let name = ""
let id = ""
let phone = ""
let school = ""
let faculty = ""
let sex = ""
let or = ""

Page({

  data: {
    seleNulla:null,
    seleNullb:null,
    seleNullc:null,//设置的变量
    FacultyArr: ['資訊科技學院', '商學院', '法學院','中醫藥學院','酒店與旅遊管理學院','人文藝術學院','醫學院','國際學院','藥學院','先修'],//选项的值
    FacultyIndex: 0,   //选项的索引
    SexArr:['男','女'],
    SexIndex: 0,
    OrArr:['是','否'],
    OrIndex: 0
  },

  addData(){
    DB.add({  
      data: {
        name: name,
        id : id,
        school: school,
        phone: phone,
        faculty: faculty,
        sex: sex,
        or: or
      },

      success: function (res) {
        console.log(res._id)
        wx.showModal({
          title: '成功',
          content: '報名成功',
          showCancel: false
          })
        setTimeout(function(){
          wx.redirectTo({
            url: '../start/start',
            })
        },2000)
      }
    })

  },

  addName(event){
    console.log(event.detail.value)
    name = event.detail.value
  },

  bindSexPickerChange: function(e) {
    console.log(this.data.SexArr[e.detail.value])
    sex = this.data.SexArr[e.detail.value]
    this.setData({
      seleNulla:'0',
      SexIndex: e.detail.value
    })
 },

  addId(event){
    console.log(event.detail.value)
    id = event.detail.value
  },

 bindFacultyPickerChange: function(e) {
     console.log(this.data.FacultyArr[e.detail.value])
     faculty = this.data.FacultyArr[e.detail.value]
     this.setData({
       seleNullb:'0',
       FacultyIndex: e.detail.value
     })
  },

 bindOrPickerChange: function(e) {
  console.log(this.data.OrArr[e.detail.value])
  or = this.data.OrArr[e.detail.value]
  this.setData({
    seleNullc:'0',
    OrIndex: e.detail.value
  })
},

  addSchool(event){
    console.log(event.detail.value)
    school = event.detail.value
  },

  addPhone(event){
    console.log(event.detail.value)
    phone = event.detail.value
  },

  formSubmit: function (e) {  
    console.log('form发生了submit事件，携带数据为：', e.detail.value);  
  },  

  formReset: function () {  
    console.log('form发生了reset事件')  
  },  

})