<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
const button = reactive({
  color: "primary",
  disabled: false,
});

function buttonChange() {
  const { color } = button;
  button.color = color === "success" ? "primary" : "success";
  button.disabled = false;
}

const gfButton = ref(null);

// onMounted(() => {
//   gfButton.value.addEventListener("on-click", (e) => {
//     console.log('%c 「vue3」接收组件内部抛出事件', 'color:#67C23A', e);
//   });
// })


function handleGfbuttonClick(e) {
  console.log('自定义元素事件', e)
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">Vue3 跨框架UI库测试</h1>
    <gf-button @on-click.passive="handleGfbuttonClick">普通按钮</gf-button>
    <gf-button ref="gfButton" :color="button.color" :disabled="button.disabled" style="margin-left: 10px;">普通按钮
    </gf-button>
    <gf-button color="success" style="margin-left: 10px;">成功按钮</gf-button>
    <gf-button color="#cc9999" style="margin-left: 10px;">自定义颜色</gf-button>
    <div style="margin-top: 20px">
      <button @click="buttonChange">修改button配置</button>
      <button style="margin-left: 10px" @click="mes">button通信</button>
    </div>
  </div>
</template>
