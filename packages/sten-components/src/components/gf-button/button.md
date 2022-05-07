

### 测试用例

``` html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
    <title>Stencil开发Tab</title>
    <link rel="stylesheet" href="/build/sten-components.css">
    <script type="module" src="/build/sten-components.esm.js"></script>
    <script nomodule src="/build/sten-components.js"></script>

    <!-- icon -->
    <link rel="stylesheet" href="http://localhost:3334/build/sten-icons.css">
    <script type="module" src="http://localhost:3334/build/sten-icons.esm.js"></script>
    <script nomodule src="http://localhost:3334/build/sten-icons.js"></script>
</head>

<body>
    <h3 onclick="handleClick()">
        背景颜色
    </h3>
    <div class="flexs">
        <gf-button class="mlr10">普通按钮</gf-button>
        <gf-button color="primary" class="mlr10"> 正常按钮</gf-button>
        <gf-button id="success-btn" color="success" class="mlr10">成功按钮</gf-button>
        <gf-button color="info" class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" class="mlr10">警告按钮</gf-button>
        <gf-button color="danger">错误按钮</gf-button>

    </div>

    <h3>镂空</h3>
    <div class="flexs">
        <gf-button class="mlr10">普通按钮</gf-button>
        <gf-button color="primary" plain class="mlr10">正常按钮</gf-button>
        <gf-button color="success" plain class="mlr10">成功按钮</gf-button>
        <gf-button color="info" plain class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" plain class="mlr10">警告按钮</gf-button>
        <gf-button color="danger" plain class="mlr10">错误按钮</gf-button>
    </div>

    <h3>按钮size</h3>
    <h1 style="font-size: 12px;">大号</h1>
    <div class="flexs">
        <gf-button color="primary" size="large" class="mlr10">普通按钮</gf-button>
        <gf-button color="success" size="large" class="mlr10">成功按钮</gf-button>
        <gf-button color="info" size="large" class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" size="large" class="mlr10">警告按钮</gf-button>
        <gf-button color="danger" size="large" class="mlr10">错误按钮</gf-button>
    </div>
    <br>

    <h1 style="font-size: 12px;">正常</h1>
    <div class="flexs">
        <gf-button color="primary" class="mlr10">普通按钮</gf-button>
        <gf-button color="success" class="mlr10">成功按钮</gf-button>
        <gf-button color="info" class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" class="mlr10">警告按钮</gf-button>
        <gf-button color="danger" class="mlr10">错误按钮</gf-button>
    </div>


    <h1 style="font-size: 12px;">小</h1>
    <div class="flexs">
        <gf-button color="primary" size="small" class="mlr10">普通按钮</gf-button>
        <gf-button color="success" size="small" class="mlr10">成功按钮</gf-button>
        <gf-button color="info" size="small" class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" size="small" class="mlr10">警告按钮</gf-button>
        <gf-button color="danger" size="small" class="mlr10">错误按钮</gf-button>
    </div>

    <h1 style="font-size: 12px;">超小</h1>
    <div class="flexs">
        <gf-button color="primary" size="smaller" class="mlr10">普通按钮</gf-button>
        <gf-button color="success" size="smaller" class="mlr10">成功按钮</gf-button>
        <gf-button color="info" size="smaller" class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" size="smaller" class="mlr10">警告按钮</gf-button>
        <gf-button color="danger" size="smaller" class="mlr10">错误按钮</gf-button>
    </div>



    </br><br>
    <h3>按钮禁用</h3>
    <div class="flexs">
        <gf-button color="primary" disabled class="mlr10">普通按钮</gf-button>
        <gf-button color="success" disabled class="mlr10">成功按钮</gf-button>
        <gf-button color="info" disabled class="mlr10">信息按钮</gf-button>
        <gf-button color="warning" disabled class="mlr10">警告按钮</gf-button>
        <gf-button color="danger" disabled class="mlr10">错误按钮</gf-button>
    </div>

    <br>

    <h3>自定义颜色</h3>
    <div class="flexs">
        <gf-button color="#BF0060" class="mlr10">自定义颜色</gf-button>
        <gf-button color="#00BB00" class="mlr10">自定义颜色</gf-button>
        <gf-button color="#A23400" class="mlr10">自定义颜色</gf-button>
        <gf-button color="#EAC100" class="mlr10">自定义颜色</gf-button>
        <gf-button color="#5151A2" class="mlr10">自定义颜色</gf-button>
    </div>

    <h3>自定义className</h3>
    <gf-button class-name="aaa">自定义className</gf-button>
    <button id="changid">change</button>
    <button id="ant">change</button>
    <h3>带图标</h3>
    <gf-button color="success">
        成功按钮
        <gf-icon-loading slot="icon-left" color="white" size="20"></gf-icon-loading>
    </gf-button>
</body>

</html>

<script>
    const disableButton = document.getElementById("disable-btn");
    const successButton = document.getElementById("success-btn");

    document.getElementById("changid").onclick = function () {
        // disableButton.disabled = !disableButton.disabled;
        // disableButton.setAttribute("disabled", disableButton.getAttribute("disabled") === 'true' ? false : true)
        disableButton._internal()
        console.log([disableButton])
    }

    // successButton.addEventListener("on-click", (e) => {
    //     console.log(111, e)
    // })
    function handleClick() {
        console.log(1111)
    }
</script>


<style>
    /* body {
        height: 2000px;
    } */
    .aaa {
        background: blue;
        padding: 10px 12px;
    }

    .aaa:hover {
        background: yellow !important;
    }

    .flexs {
        display: flex;
        align-items: center;
    }

    .mlr10 {
        margin: 0 5px;
    }
</style>
```