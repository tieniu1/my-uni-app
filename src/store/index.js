import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'
import * as Types from '@/store/types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { // 公共状态
        cancelTokenList: [] // 存储所有请求对象，取消请求时使用
    },
    mutations:{
        [Types.SET_CANCELTOKEN](state,cancelToken){
            // 每次都重新赋值，数据可以被vue追踪
            state.cancelTokenList = [...state.cancelTokenList,cancelToken]
        },
        [Types.CLEAR_CANCELTOKEN](state){
            // 执行所有请求方法
            state.cancelTokenList.forEach(cancelToken=>cancelToken())
            state.cancelTokenList = [] // 清空列表
        }
    },
    modules:{...modules}
})
export default store
