import * as Types from '@/store/types'

const userActions = {
   [Types.SET_LOGIN]({commit,dispatch}, payload) {
    /* 登录 */
   setTimeout(()=>{
     commit(Types.SET_USER_INFO,payload)
   },300)
  },
  /* 退出 */
  async [Types.SET_LOGOUT]({commit}, payload) {
    commit(Types.CLEAR_USER_INFO)
  }
}
export default userActions


