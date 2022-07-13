<template>
  <view>
    profile
  </view>
</template>

<script>
import {setTabBarActive} from "../../utils/uni";

export default {
  name: "profile",
  onShow() {    console.log('this._uid:::::::',this._uid)
    if(this._uid!=0){
      this.$Router.forceGuardEach()
    }
    setTabBarActive(this,2)
  },
}
</script>

<style scoped>

</style>
