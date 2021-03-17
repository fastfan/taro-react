import { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Text,Image } from '@tarojs/components'
import './task-center.scss'
import { AtCard,AtDivider } from 'taro-ui'
export default class TaskCenter extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      verifiedData:{
        title:"核实取证",
        icon:require('../../assets/checked.png'),
        name:"已核实事件",
        path:"checked-case"
      },
      caseDataTitle:"案件上报",
      unChecked:{
        num:3
      },
      caseData:[
        {
          icon:require('../../assets/checked.png'),
          name:"案件上报",
          path:"upload-case"
        },
        {
          icon:require('../../assets/case.png'),
          name:"案件草稿箱",
          path:"example-case"
        },
        {
          icon:require('../../assets/cased.png'),
          name:"已上报案件",
          path:"escalated-case"
        },
      ]
    }
  }
   jumpTo = (params) => {
     console.log(params)
    Taro.navigateTo({
      url: `/pages/${params.path}/${params.path}`
    })
  };
   cliclPanel = () => {
    console.log('点击了面板')
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { verifiedData,caseDataTitle,caseData,unChecked } = this.state;
    return (
      <View className="task-center">
        <View className="task-center-top">
          <View className="task-center-top-cont">
            <Text className="task-center-top-title">{verifiedData.title}</Text>
            <View className="task-center-top-cont-center2" onClick={()=>this.jumpTo(verifiedData)}>
              <Image className="task-center-top-cont-center-icon" src={verifiedData.icon}></Image>
              <View className="task-center-top-cont-center-text">{verifiedData.name}</View>
            </View>
          </View>
          <View className="task-center-top-cont">
            <Text className="task-center-top-title">{caseDataTitle}</Text>
            <View className="task-center-top-cont-block">
              {
                caseData.length>0&&caseData.map((item,index)=>{
                  return (
                    <View className="task-center-top-cont-center"  key={index} onClick={()=>this.jumpTo(item)}>
                      <Image className="task-center-top-cont-center-icon" src={item.icon}></Image>
                      <View className="task-center-top-cont-center-text">{item.name}</View>
                    </View>
                  )
                })
              }
            </View>
          </View>
        </View>
        <View className="task-center-mid">
          <AtCard
            extra='查看全部'
            title={'待核实事件 '+ '('+unChecked.num+')'}
            thumb='../../assets/case_edit.png'
            onClick={this.cliclPanel}
          >
            <View className="task-center-mid-title">案件编号20200920</View>
            <View className="task-center-mid-contTop">
              <Text className="task-center-mid-contTop-mintitle">故障-车位故障</Text>
              <Text className="task-center-mid-contTop-extra">非常紧急</Text>
            </View>
            <AtDivider content='' />
            <Text className="task-center-mid-cont">案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述</Text>
            <View className="task-center-mid-contBot">
              <Text className="task-center-mid-contBot-text">滨江区停车场A</Text>
              <Text className="task-center-mid-contBot-time">2020-10-12 09:23</Text>
            </View>
          </AtCard>
        </View>
      </View>
    )
  }
}
