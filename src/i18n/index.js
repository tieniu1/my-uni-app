import Vue from "vue";
import VueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'

const messages = {
  en, zh
}
Vue.use(VueI18n)

const i18n = new VueI18n({
  // locale: uni.getLocale() || 'zh', // 获取已设置的语言
  // locale:  'zh', // 获取已设置的语言
  locale:  'en', // 获取已设置的语言
  messages
})
export default i18n
