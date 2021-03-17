/*
 * @Author: fastfan
 * @Date: 2021-03-17 16:07:07
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-17 16:20:55
 * @Description: your description
 */
import { Component } from 'react'
import { View,Text } from '@tarojs/components'
import './example-case.scss'
import { AtSwipeAction } from 'taro-ui'

export default class ExampleCase extends Component {
   constructor(){
     super(...arguments);
     this.state = {
      caseList:[
        {
          title:"龙湖天街停车场",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场2",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场3",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场4",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场2",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场3",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场4",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场2",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场3",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
        {
          title:"龙湖天街停车场4",
          date:"1993-10-12 09:23",
          case:"故障-车位故障",
          pro:"非常紧急",
          options:[
            {
              text: '删除',
              style: {
                background:`url('../../assets/delete.png') #FF4949 center 22px no-repeat`,
                backgroundSize: '20px 20px',
              }
            }
          ],
          isOpened: false
        },
      ]
     }
   }
   handleClick (index) {
    this.caseList.splice(index,1)
   }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { caseList } = this.state;
    return (
      <View class="example-case">
        <View class="example-case-cont">
          {
            caseList.length>0&&caseList.map((item,index) => {
              return (
                <AtSwipeAction autoClose onClick={this.handleClick.bind(this,index)}  key={item.title+index} options={item.options} is-opened={item.isOpened}>
                  <View class={index===caseList.length-1?'example-case-cont-cont2':'example-case-cont-cont'}>
                      <View class='example-case-cont-cont-top'>
                        <Text class="top-left">{item.title}</Text>
                        <Text class="top-right">{item.date}</Text>
                      </View>
                      <View class='example-case-cont-cont-bottom'>
                        <Text class="bottom-left">{item.case}</Text>
                        <Text class="bottom-right">{item.pro}</Text>
                      </View>
                  </View>
                </AtSwipeAction>
              )
            })
          }
        </View>
      </View>
    )
  }
}
