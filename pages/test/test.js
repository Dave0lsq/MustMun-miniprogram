//index.js
const DB = wx.cloud.database().collection("list")
let name  = ""
let age = ""

Page({
  addName(event){
    console.log(event.detail.value)
    name = event.detail.value
  },
  addAge(event){
    console.log(event.detail.value)
    age = event.detail.value
  },
  //添加数据
  addData(){
    DB.add({
      data:{
        name: name,
        age: age
      },
      success(res){
      console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
        }
    })
  },
  //查询数据
  getData(){
    DB.get({
      success(res){
        console.log("查询成功",res)
        }
    })
  },


})
