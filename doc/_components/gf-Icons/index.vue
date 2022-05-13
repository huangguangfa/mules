<template>
    <div class="icon-lsit">
        <div class="icon-blcok">
            <h5>基础Icon</h5>
            <ul v-html="iconComponents" @click="iconClick"></ul>
        </div>
        <div class="icon-blcok">
            <h5>彩色Icon</h5>
            <ul v-html="colorIconComponents" @click="iconClick"></ul>
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
        iconComponents: function() {
            return this.filterComponents(allIcon.list)
        },
        colorIconComponents: function() {
            return this.filterComponents(allIcon.colorList)
        }
    },
    methods: {
        filterComponents(data = []){
            return data.map( ({cName}) => {
                const icon = `<${cName}></${cName}>`
                const c = `<li class="icon-item" data-icon='${icon}'>${icon}</li>`
                return c;
            }).join('');
        },
        iconClick(e){
            const icon = e.target.dataset.icon 
            || e.target.parentNode.parentNode.parentNode.dataset.icon 
            || e.target.parentNode.parentNode.parentNode.parentNode.dataset.icon;
            let x = e.pageX || e.clientX + scrollX;
            let y = e.pageY || e.clientY + scrollY;
            if(!icon) return;
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
            $mes.style = `
            position:fixed;left:${ x-55 }px;top:40px;z-index:9999;font-size:12px; color:#343435; animation: Copyspan 800ms ease-in-out;
            padding:10px 30px; border:1px solid rgb(103, 194, 58); border-radius:5px;
            `;
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