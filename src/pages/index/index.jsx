import { Component } from 'react'
import { View,Image } from '@tarojs/components'
import './index.scss'
let imgIcon = require("../../assets/demo.png");
export default class Index extends Component {
   constructor(prop){
     super(prop);
     this.state = {
      userInfo:{
        imgIcon:imgIcon,
        nickName:"王渊铭",
        department:"沙雕部"
     }
    }
   }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { userInfo } = this.state;
    return (
      <View class="personal-center">
        <View class="personal-center-avater">
          <Image src={userInfo.imgIcon}  class="personal-center-avater-img"></Image>
          <View class="personal-center-avater-text">
              <View class="userinfo-nickname">{userInfo.nickName}</View>
              <View class="userinfo-department">{userInfo.department}</View>
          </View>
        </View>
      </View>
    )
  }
}
