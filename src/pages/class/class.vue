<template>
  <view>
    <!--      <navigator open-type="navigate" url="/pagesClass/classDetail/classDetail">跳转到checkin</navigator>-->
    <button @click="toClassDetail">toClassDetail</button>
    <button @click="isShow=!isShow">showList</button>
    <van-transition :show="isShow">
      <view v-for="i in 10">{{i}}</view>
    </van-transition>
<!--    <view v-show="isShow">-->
<!--    </view>-->
  </view>
</template>

<script>
import {setTabBarActive} from "../../utils/uni";

export default {
  name: "class",
  data() {
    return {
      isShow: false
    }
  },
  onShow() {
    console.log('this._uid:::::::', this._uid)
    if (this._uid != 0) {
      this.$Router.forceGuardEach()
    }
    setTabBarActive(this, 1)
  }, methods: {
    toClassDetail() {
      // this.$Router.push("/pagesClass/classDetail/classDetail")
      uni.navigateTo({
        url: '/pagesClass/classDetail/classDetail'
      })
    }
  }
}
</script>

<style scoped>

</style>
