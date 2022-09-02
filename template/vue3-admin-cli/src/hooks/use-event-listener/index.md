#### 事件监听

```js
<template>
  <div ref="element">Div1</div>
</template>


import { useEventListener } from '@/hooks'

const element = ref<HTMLDivElement>()
const stop = useEventListener(element, 'click',  (e) => {
  console.log(e)
})
// 注销事件
onUnmounted(() =>{
  stop()
})

// 默认全局对象window
useEventListener('storage', function (e: StorageEvent) {
    console.log(e)
})

```