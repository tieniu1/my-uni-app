Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    createList(permissionType) {
      let list = [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "icon": "home-o"
      },
        {
          "pagePath": "pages/class/class",
          "text": "班级",
          "icon": "friends-o"
        },
        {
          "pagePath": "pages/order/order",
          "text": "订单",
          "icon": "orders-o"
        },
        {
          "pagePath": "pages/profile/profile",
          "text": "我的",
          "icon": "user-o"
        }]
      switch (+permissionType) {
        case 0: // 角色1
          list = [list[0], list[1], list[3]]
          break;
        case 1: // 角色2
          list = [list[0], list[2], list[3]]
          break;

      }
      return list
    },
    handleClick(event) {
      const data = event.currentTarget.dataset
      const url = '/' + data.item.pagePath
      wx.switchTab({url})
    },
    setList() {
      const permissionType = wx.getStorageSync('permissionType')
      console.log(permissionType)
      let list = this.createList(permissionType)
      this.setData({list})
    }
  },
  lifetimes: {
    attached() {
      this.setList()
      console.log(this.data.list)
    }
  }
})
// custom-tab-bar/1/picker.js
