<script setup lang="ts">
import useRouter from '@/hooks/useRouter'
import useCrypto from '@/hooks/useCrypto'
import useEventBus from '@/hooks/useEvents'
import { startRequest } from './hooks/http'
const { $on } = useEventBus()
const { routerPush } = useRouter()
const { decrypt, encrypt } = useCrypto()
function to(name: string) {
  routerPush(name, {
    formName: 'demo',
  })
}
$on('connectionNetwork', (e) => {
  console.log('网络变化', e)
})
$on('datas', (data) => {
  console.log(data)
})
let vi: any = null
function cryptos(type: string) {
  let res
  const data = JSON.stringify({
    name: '张三',
    age: 18,
  })
  const crptyType = { name: 'AES' }
  if (type === 'encrypt') {
    res = encrypt(data, crptyType)
    vi = res
  } else {
    res = decrypt(vi, crptyType)
  }
  console.log(res)
}

function getName(name: string) {
  console.log('获取名称', name)
}

setTimeout(() => {
  getName('z')
}, 2000)
</script>

<template>
  <div class="demo">
    <span>demo页面</span>
    <button @click="to('pc')">跳转到pc页面</button>
    <button @click="to('mobile')">跳转到移动端页面</button>

    <button @click="cryptos('encrypt')">加密</button>
    <button @click="cryptos('decrypt')">解密</button>

    <div style="margin-top: 10px">
      <button @click="startRequest('get')">发请求</button>
      <button @click="startRequest('get')">get请求</button>
      <button @click="startRequest('post')">post请求</button>
      <button @click="startRequest('all')">请求多个</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  span {
    color: red;
    z-index: $--index-popper;
  }
}
</style>
