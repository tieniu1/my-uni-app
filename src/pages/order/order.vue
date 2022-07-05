<template>
  <view>
    order
  </view>
</template>

<script>
export default {
  name: "order",
  onShow() {
    if (this.$mp.page && typeof this.$mp.page.getTabBar === 'function' && this.$mp.page.getTabBar()) {
      this.$mp.page.getTabBar().setData({
        active: 1,
        isShow: true
      })
    }
  },
}
</script>

<style scoped>

</style>
