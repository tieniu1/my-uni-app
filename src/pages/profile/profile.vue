<template>
  <view>
    profile
  </view>
</template>

<script>
import {setTabBarActive} from "../../utils/uni";

export default {
  name: "profile",
  onShow() {
    setTabBarActive(this,2)
  },
}
</script>

<style scoped>

</style>
