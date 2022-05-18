<template><h2 id="input-按钮" tabindex="-1"><a class="header-anchor" href="#input-按钮" aria-hidden="true">#</a> Input 按钮</h2>
<p>支持<code v-pre>input、textarea</code>两站类型输入, 支持图标+input混合, 包括支持输入框的状态、基本上定制化属性都是基于Input、而textarea定制化相对少些</p>
<h4 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%22%20type%3D%22textarea%22%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="请输入姓名"></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea"></gf-input>
</div>
</template></DemoAndCode>
<h4 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用" aria-hidden="true">#</a> 禁用</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%20disabled%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%22%20type%3D%22textarea%22%20disabled%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edisabled%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edisabled%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="请输入姓名" disabled></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" disabled></gf-input>
</div>
</template></DemoAndCode>
<h4 id="清空" tabindex="-1"><a class="header-anchor" href="#清空" aria-hidden="true">#</a> 清空</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%20disabled%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%22%20type%3D%22textarea%22%20disabled%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edisabled%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edisabled%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="请输入姓名" disabled></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" disabled></gf-input>
</div>
</template></DemoAndCode>
</template>
