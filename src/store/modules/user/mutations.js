import * as Types from '@/store/types'

const userMutations = {

  /* 存储用户信息 */
  [Types.SET_USER_INFO](state, payload) {
    state.permissionType = payload
    uni.setStorageSync('permissionType', payload)
    uni.setStorageSync('firstRender', true)
    uni.switchTab({
        url: '../index/index', success() {
          console.log('success')
        }
      }
    )
    ;
  },
  /*切换用户角色*/
  [Types.CHANGE_PERMISSION_TYPE](state,payload) {
    state.permissionType = payload
    uni.setStorageSync('permissionType', payload)
  },
  /* 清空用户信息 */
  [Types.CLEAR_USER_INFO](state) {
    state.userInfo = {}
    state.hasPermission = false
    state.token = ''
    state.permissionType = -1
    state.authList = []
    state.menuPermission = false
    uni.clearStorage()
  },
}
export default userMutations

