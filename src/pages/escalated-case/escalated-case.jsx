/*
 * @Author: fastfan
 * @Date: 2021-03-17 16:06:52
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-17 16:11:34
 * @Description: your description
 */
import { Component } from 'react'
import { View } from '@tarojs/components'
import './escalated-case.scss'

export default class EscalatedCase extends Component {
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
        <View>已上报案件</View>
      </View>
    )
  }
}
