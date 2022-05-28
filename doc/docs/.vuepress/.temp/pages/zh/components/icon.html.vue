<template><div><h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h2>
<p>语义化的矢量图标、图标来自阿里开源图标库, 玩法参考市面react玩法、按单个icon引入并使用,这样做的目的是为了<code v-pre>按需只加载</code>当前展示的对应图标、而不是对图标进行一个全局注入的方式, <code v-pre>点击图标进行icon组件复制</code></p>
<h4 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22flex%20childer-margin10%22%3E%0A%20%20%20%20%3Cgf-icon-add-cart-fill%20class%3D%22m15%22%3E%3C%2Fgf-icon-add-cart-fill%3E%0A%20%20%20%20%3Cgf-icon-add-fill%20class%3D%22m15%22%3E%3C%2Fgf-icon-add-fill%3E%0A%20%20%20%20%3Cgf-icon-add-select%20class%3D%22m15%22%3E%3C%2Fgf-icon-add-select%3E%0A%20%20%20%20%3Cgf-icon-arrow-down%20class%3D%22m15%22%3E%3C%2Fgf-icon-arrow-down%3E%0A%3C%2Fdiv%3E%0A"
        language="vue"
        showText="显示代码"
        hideText="隐藏代码"
        jsLibsStr="%5B%5D"
        :minHeight="0"
        cssLibsStr="%5B%5D"
        vueVersion="^2.6.14"
        jsfiddleStr="%7B%22framework%22%3A%22library%2Fpure%22%7D"
        onlineBtnsStr="%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D"
        codesandboxStr="%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eflex%20childer-margin10%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-icon-add-cart-fill%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Em15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-icon-add-cart-fill%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-icon-add-fill%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Em15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-icon-add-fill%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-icon-add-select%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Em15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-icon-add-select%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-icon-arrow-down%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Em15%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-icon-arrow-down%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="flex childer-margin10">
    <gf-icon-add-cart-fill class="m15"></gf-icon-add-cart-fill>
    <gf-icon-add-fill class="m15"></gf-icon-add-fill>
    <gf-icon-add-select class="m15"></gf-icon-add-select>
    <gf-icon-arrow-down class="m15"></gf-icon-arrow-down>
</div>
</template></DemoAndCode>
<GfIcons></GfIcons>
<h3 id="配置属性" tabindex="-1"><a class="header-anchor" href="#配置属性" aria-hidden="true">#</a> 配置属性</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td>尺寸</td>
<td>number</td>
<td>-</td>
<td>25</td>
</tr>
<tr>
<td>styles</td>
<td>style</td>
<td>Object</td>
<td>-</td>
<td>—</td>
</tr>
<tr>
<td>color</td>
<td>颜色</td>
<td>16进制 / 其他</td>
<td>—</td>
<td>#000000</td>
</tr>
<tr>
<td>rotate</td>
<td>选择角度</td>
<td>string / number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>textColor</td>
<td>文字颜色</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>spin</td>
<td>旋转动画,使用loading</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>opacity</td>
<td>透明度</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
</tbody>
</table>
<CommentService></CommentService></div></template>
