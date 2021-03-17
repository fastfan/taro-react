export default {
  pages: [
    'pages/index/index',
    'pages/task-center/task-center',
    'pages/notify/notify',
    'pages/checked-case/checked-case',
    'pages/upload-case/upload-case',
    'pages/example-case/example-case',
    'pages/escalated-case/escalated-case',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#e8483e',
    navigationBarTitleText: '个人中心',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/task-center/task-center",
        text: "任务中心",
        iconPath:"./assets/task.png",
        selectedIconPath:"./assets/tasklight.png"
      },
      {
        pagePath: "pages/notify/notify",
        text: "消息通知",
        iconPath:"./assets/nitify.png",
        selectedIconPath:"./assets/notifylight.png"
      },
      {
        pagePath: "pages/index/index",
        text: "个人中心",
        iconPath:"./assets/personal.png",
        selectedIconPath:"./assets/personallight.png"
      }
    ],
    selectedColor:"#e54645"
  },
}
