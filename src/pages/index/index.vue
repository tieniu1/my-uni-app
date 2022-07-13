<template>
  <view class="main">

    <selectUser @change="radioChange"/>
    <view>
      <button type="primary" size="mini" @click="changeUser">切换角色</button>
    </view>
    <view>
      <button @click="toCheckin">跳转到checkin</button>
    </view>
  </view>
</template>

<script>
import {setTabBarActive} from "../../utils/uni";
import * as Types from '@/store/types'

export default {
  name: "index",
  data() {
    return {
      radioVal: '0'
    }
  },
  onShow() {
    console.log('this._uid:::::::', this._uid)
    if (this._uid != 0) {
      this.$Router.forceGuardEach()
    }
    setTabBarActive(this, 0)
  },
  methods: {
    toCheckin() {
      // this.$Router.push("/pagesFront/checkin/checkin")
      uni.navigateTo({
        url:'/pagesFront/checkin/checkin'
      })
    },
    radioChange(value) {
      this.radioVal = value
    },
    changeUser() {
      this.$store.commit(`user/${Types.CHANGE_PERMISSION_TYPE}`, this.radioVal)
      setTabBarActive(this, 0)
    }
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  gap: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
