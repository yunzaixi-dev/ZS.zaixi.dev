<template>
  <ClientOnly>
    <div id="flowise-container" class="chatbot-container"></div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  chatflowid: {
    type: String,
    required: true
  },
  apiHost: {
    type: String,
    required: true
  }
})

onMounted(() => {
  // 确保脚本加载
  const loadChatbot = () => {
    if (typeof window !== 'undefined' && window.Chatbot) {
      window.Chatbot.init({
        chatflowid: props.chatflowid,
        apiHost: props.apiHost,
      })
    } else {
      // 如果脚本还没加载完，等待100ms后重试
      setTimeout(loadChatbot, 100)
    }
  }
  loadChatbot()
})
</script>

<style scoped>
.chatbot-container {
  width: 100%;
  height: 600px;
  margin: 20px 0;
  position: relative;
}
</style>
