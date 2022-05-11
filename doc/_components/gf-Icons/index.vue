<template>
    <div class="icon-lsit">
        <div class="icon-blcok">
            <h5>基础组件</h5>
            <ul v-html="iconComponents" @click="iconClick"></ul>
        </div>
        
    </div>
</template>

<script>
import allIcon from "../../../packages/sten-icons/src/components/componentJsonLisFile.js"
export default {
    data() {
        return {
            
        }
    },
    computed:{
        iconComponents: () => {
            return allIcon.list.map( item => {
                const icon = `<${item}></${item}>`
                const c = `<li class="icon-item" data-icon='${icon}' @click="aaa">${icon}</li>`
                return c;
            }).join('');
        }
    },
    methods: {
        iconClick(e){
            const icon = e.target.dataset.icon 
            || e.target.parentNode.parentNode.parentNode.dataset.icon 
            || e.target.parentNode.parentNode.parentNode.parentNode.dataset.icon;
            let x = e.pageX || e.clientX + scrollX;
            let y = e.pageY || e.clientY + scrollY;
            this.copy(icon, x,y)
        },
        copy(value,x,y){
            //创建copy元素
            const $textarea = document.createElement('textarea');
            $textarea.readOnly = 'readonly';
            $textarea.style.position = 'absolute';
            $textarea.style.left = '-9999px';
            $textarea.value = value;
            document.body.appendChild($textarea);
            $textarea.select();
            const result = document.execCommand('Copy');
            if (result) {
                this.addelement('复制成功','#67c23a', x,y)
            }
            document.body.removeChild($textarea);
        },
        addelement(text,color, x,y){
            //获取鼠标位置
            let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const $mes  = document.createElement('span');
            $mes.setAttribute('class','Copyspan');
            $mes.style = `position:fixed;left:${ x-20 }px;top:${ y - 80}px;z-index:9999;font-size:12px; color:#343435; animation: Copyspan 800ms ease-in-out;`;
            $mes.innerText = text;
            $mes.style.color = color;
            document.body.appendChild($mes);
            //移除
            setTimeout(()=>{
                document.body.removeChild($mes);
            }, 500);
        }
    }
}
</script>

<style>
    .icon-blcok>ul{
        display: flex;flex-wrap: wrap;
        border: 1px solid #eaeefb;
        overflow: hidden;
        border-radius: 4px;
        padding-left: 0;
    }
    .icon-blcok>ul>.icon-item{
        width: 16.66%;;height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-right: -1px;
        margin-bottom: -1px;
        cursor: pointer;
    }
    .icon-blcok>ul> li:hover{
        background-color: #f5f5f5;
    }
    @keyframes Copyspan { 
        /* 水平抖动，核心代码 */
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(+2px, 0, 0); }
        30%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(+4px, 0, 0); }
        50% { transform: translate3d(-4px, 0, 0); }
    }
</style>