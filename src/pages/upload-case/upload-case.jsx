/*
 * @Author: fastfan
 * @Date: 2021-03-17 16:07:23
 * @LastEditors: fastfan
 * @LastEditTime: 2021-03-17 16:48:39
 * @Description: your description
 */
import { Component } from 'react'
import { View,Text,Picker } from '@tarojs/components'
import './upload-case.scss'
let Imgicon = require('../../assets/arrow-right.png')
import { AtForm, AtImagePicker } from 'taro-ui'

export default class UploadCase extends Component {
   constructor(){
     super(...arguments);
     this.state = {
      value:"",
      imgIcon:Imgicon,
      selector: ['滨江停车场', '滨江停车场2', '滨江停车场3', '滨江停车场4'],
      selectorValue: 0,
      multiSelector: [
        ['饭', '粥', '粉'],
        ['猪肉', '牛肉']
      ],
      mulitSelectorValues:[0,1],
      selector3: ['一般', '紧急', '非常紧急'],
      selectorValue3: 0,
      files: [
        {
          url: '../../assets/demo.png',
        }
      ]
    }
   }

  handleCancel(e) {
    console.log('handleCancel', e)
  };
  handleChange (e) {
    this.setState({
      selectorValue:e.detail.value
    })
  };
  handleMulitChange (e) {
    console.log('handleMulitChange', e)
    this.setState({
      mulitSelectorValues:e.detail.value
    })
  };
  handleColumnChange(e) {
    console.log('handleColumnChange', e)
  };
  onChange (files) {
    this.setState({
      files:files
    })
  };
  onFail (mes) {
    console.log(mes)
  };
  onImageClick (index, file) {
    console.log(index, file)
  };
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { selector,selectorValue,multiSelector,mulitSelectorValues,selector3,selectorValue3,files } = this.state;
    return (
      <View class="upload-case">
        <View class="upload-case-cont">
          <AtForm>
            <Picker
              class="upload-case-cont-picker"
              mode='selector'
              range={selector}
              value={selectorValue}
              onChange={this.handleChange.bind(this)}
              onCancel={this.handleCancel.bind(this)}
              >
                <View class='demo-list-item'>
                  <View class='demo-list-item__label'>相关停车场</View>
                  <View class='demo-list-item__value'>
                    { selector[selectorValue] }
                  </View>
              </View>
            </Picker>
            <Picker
              class="upload-case-cont-picker"
              mode='multiSelector'
              range={multiSelector}
              value={mulitSelectorValues}
              onChange={this.handleMulitChange.bind(this)}
              onColumnchange={this.handleColumnChange.bind(this)}
              >
                <View class='demo-list-item'>
                  <View class='demo-list-item__label'>案件类型</View>
                  <View class='demo-list-item__value'>
                    {
                      `${
                      multiSelector[0][mulitSelectorValues[0]]
                    } & ${multiSelector[1][mulitSelectorValues[1]]}`
                      }
                  </View>
              </View>
            </Picker>
            <Picker
              class="upload-case-cont-picker"
              mode='selector'
              range={selector3}
              value={selectorValue3}
              onChange={this.handleChange.bind(this)}
              onCancel={this.handleCancel.bind(this)}
              >
                <View class='demo-list-item'>
                  <View class='demo-list-item__label'>紧急程度</View>
                  <View class='demo-list-item__value'>
                    { selector3[selectorValue3] }
                  </View>
              </View>
            </Picker>
          </AtForm>
        </View>
        <View class="upload-case-cont">
          <View class="upload-case-cont-bottom">
            <Text class="bottom-title">附件</Text>
            <Text class="bottom-mintitle">可上传图片、视频、文件数量不超过8个</Text>
          </View>
          <AtImagePicker
            files={files}
            onChange={this.onChange.bind(this)}
            showAddBtn={true}
          />
        </View>
      </View>
    )
  }
}
