<template>
  <view class="main">
    <view class="i18n-text">
      <view style="font-size: 20px;font-weight: bold">i18n</view>
      <view>{{$t('title')}}</view>
      <view>
        {{$t('index.title')}}
      </view>
      <view>{{$t('index.msg',{msg:'你1231231'})}}</view>
      <view style="color: red">{{$tc('index.day',2)}}</view>
      <view style="color: red">{{$tc('index.day',1)}}</view>
    </view>
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
  onShow(){
    console.log('login onshow:::::::::::')
    console.log('uni.getLocale:::::::::',uni)
  }
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
.i18n-text{
  color: #196dbd;
}
</style>
