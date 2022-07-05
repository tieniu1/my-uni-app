<template>
  <view class="user-select">
    选择角色
    <radio-group @change="radioChange">
      <label class="radio">
        <radio value="0" :checked="radioVal==='0'"/>
        角色1</label>
      <label class="radio">
        <radio value="1" :checked="radioVal==='1'"/>
        角色2</label>
    </radio-group>
  </view>
</template>

<script>
export default {
  name: "selectUser",
  data() {
    return {
      radioVal: this.$store.state.user.permissionType+'' || '0'
    }
  },
  created() {
  },
  methods: {
    radioChange(e) {
      this.radioVal = e.detail.value
      this.$emit('change', this.radioVal)
    }
  }
}
</script>

<style scoped>

.user-select {
  display: flex;
  gap: 20px;
}
</style>
