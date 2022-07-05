<template>
  <view class="welcome">
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad() {
    uni.getStorage({
      key: 'permissionType',
      success: function (res) {
        console.log(res);
        // 说明有登录信息，直接进入首页
        uni.reLaunch({url: '../index/index'});
      },
      fail: function (err) {
        uni.reLaunch({url: '../login/login'});
      },
      complete: function (data) {
      }
    })
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
      this.getTabBar().setData({
        isShow: app.globalData.isShow
      })
    }
  },
  methods: {},
}
</script>

<style scoped>
.welcome {
  font-size: 80rpx;
}
</style>
