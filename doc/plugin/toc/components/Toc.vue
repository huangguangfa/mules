<template>
    <div class="aside" v-show="state.show">
        <ul>
            <li v-for="item in state.list" :key="item.id">
                <a :href="item.text">{{ item.id }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import "./theme/index.css"
const state = reactive({
    list: [],
    show:document.body.clientWidth > 768
})
onMounted( () =>{
    const tocList = document.getElementsByTagName('h4');
    state.list = Array.from(tocList).map(item => {
        return {
            id: item.id,
            text: item.innerText
        }
    })
})
</script>