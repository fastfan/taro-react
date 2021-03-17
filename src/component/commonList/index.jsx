/*
 * @Author: fastfan
 * @Date: 2021-03-17 14:41:50
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-17 14:54:25
 * @Description: your description
 */
import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'

export default class CommonList extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
     const { infoList } = this.props;
    return (
      <View class="commonlist">
         {
          infoList.length>0&&infoList.map(item => {
            return (
              <View  class="commonlist-cont" key={item.cardNo} >
                <View class="commonlist-cont-list">
                  <Text class="commonlist-cont-list-time">{item.time}</Text>
                  <View class="commonlist-cont-list-cont">
                    <Image class="commonlist-cont-list-cont-left" src={item.icon}></Image>
                    <View class="commonlist-cont-list-cont-right">
                      <Text class="right-title">{item.title}</Text>
                      <View class="right-cont">
                        <Text>您获派一个新的案件核实任务。案件编号：{item.cardNo},
                          核实要求：{item.request}。核实完成时间：{item.finishTime}。请尽快落实，谢谢！</Text>
                      </View>
                    </View>
                  </View>
                </View>
            </View>
            )
          })
         }
     </View>
    )
  }
}
