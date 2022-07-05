<template>
  <view class="main">
    <selectUser @change="radioChange"/>
    <view>
      <van-button
          slot="button"
          type="primary"
          @click="handleLogin">Login
      </van-button>
    </view>
  </view>

</template>

<script>
import * as Types from '@/store/types'


export default {
  name: "login",
  data() {
    return {
      radioVal: '0'
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch(`user/${Types.SET_LOGIN}`,this.radioVal)
    },
    radioChange(value) {
      this.radioVal = value
    }
  },
}
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px
}

.user-select {
  display: flex;
  gap: 20px;
}
</style>
