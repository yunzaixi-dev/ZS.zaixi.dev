import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Chatbot from './Chatbot.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Remove the layout-bottom slot since we'll use the component directly in markdown
    })
  },
  enhanceApp({ app }) {
    // Register the Chatbot component globally
    app.component('Chatbot', Chatbot)
  }
}
