import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Chatbot from './Chatbot.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Chatbot)
    })
  },
  enhanceApp({ app }) {
    // 如果需要注册组件，可以在这里添加
  }
}
