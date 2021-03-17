import { Component } from 'react'
import { View } from '@tarojs/components'
import './notify.scss'
import  CommonList  from '../../component/commonList/index.jsx'
export default class Notify extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      msgList:[
        {
          time:"2020年1月16日 09:19:30",
          icon:require("../../assets/demo.png"),
          title:"案件核实",
          cardNo:'736485931',
          request:"啊啊啊啊啊啊啊啊",
          finishTime:"2019-9-28"
        },
        {
          time:"2020年1月16日 10:19:30",
          icon:require("../../assets/demo.png"),
          title:"案件核实",
          cardNo:'736485932',
          request:"啊啊啊啊啊啊啊啊",
          finishTime:"2019-9-28"
        },
        {
          time:"2020年1月16日 10:19:30",
          icon:require("../../assets/demo.png"),
          title:"案件核实",
          cardNo:'736485933',
          request:"啊啊啊啊啊啊啊啊",
          finishTime:"2019-9-28"
        },
        {
          time:"2020年1月16日 10:19:30",
          icon:require("../../assets/demo.png"),
          title:"案件核实",
          cardNo:'736485934',
          request:"啊啊啊啊啊啊啊啊",
          finishTime:"2019-9-28"
        },
        {
          time:"2020年1月16日 10:19:30",
          icon:require("../../assets/demo.png"),
          title:"案件核实",
          cardNo:'736485935',
          request:"啊啊啊啊啊啊啊啊",
          finishTime:"2019-9-28"
        },
      ]
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { msgList } =this.state;
    return (
      <View className='index'>
        <CommonList infoList={msgList} />
      </View>
    )
  }
}
