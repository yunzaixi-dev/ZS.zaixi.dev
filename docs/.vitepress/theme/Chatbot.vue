&lt;template&gt;
  &lt;div id="flowise-container"&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'module'
  script.innerHTML = `
    import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    Chatbot.init({
        chatflowid: "b9c0d33d-a4a6-4d0a-b6da-44f255eb29d3",
        apiHost: "https://flowise.zaixi.dev",
    })
  `
  document.body.appendChild(script)
})
&lt;/script&gt;
