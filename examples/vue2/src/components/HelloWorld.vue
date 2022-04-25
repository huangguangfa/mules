<template>
    <div class="hello">
        <h1>Vue2 跨框架UI库测试</h1>
        <gf-button ref="gfButton" :color="button.color" :disabled="button.disabled">测试组件
        </gf-button>
        <div style="margin-top: 20px;">
            <button @click="buttonChange">修改button配置</button>
            <button style="margin-left:10px" @click="mes">button通信</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            button: {
                color: "primary",
                disabled: false
            }
        }
    },
    mounted() {
        this.$refs.gfButton.addEventListener("on-click", (e) => {
            console.log(e)
        })
    },
    methods: {
        buttonChange() {
            const { color } = this.button;
            this.button.color = color === "success" ? "primary" : "success";
            this.button.disabled = false;
        },
        mes() {
            this.$refs.gfButton._internal()
        },
        getGfbuttonEvents() {
            console.log(1111)
        }
    }
};
</script>

