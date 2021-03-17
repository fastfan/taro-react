/*
 * @Author: fastfan
 * @Date: 2021-03-17 16:04:12
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-17 16:35:20
 * @Description: your description
 */
import { Component } from 'react'
import { View } from '@tarojs/components'
import './checked-case.scss'

export default class CheckedCase extends Component {
   constructor(){
     super(...arguments);
     this.state = {

    }
   }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View class="checked-case">
        <View>已核实案件</View>
      </View>
    )
  }
}
