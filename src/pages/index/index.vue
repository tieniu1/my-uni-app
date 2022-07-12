<template>
  <view class="main">

    <selectUser @change="radioChange"/>
    <view>
      <button type="primary"  size="mini"  @click="changeUser">切换角色</button>
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
    setTabBarActive(this, 0)
    console.log(123)
  },
  methods: {
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
.main{
  height: 100vh;
  display: flex;
  gap: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>
