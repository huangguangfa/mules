<template><div><h2 id="input-按钮" tabindex="-1"><a class="header-anchor" href="#input-按钮" aria-hidden="true">#</a> Input 按钮</h2>
<p>支持<code v-pre>input、textarea</code>两站类型输入, 支持图标+input混合, 包括支持输入框的状态、基本上定制化属性都是基于Input</p>
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
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%20clearable%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%22%20type%3D%22textarea%22%20clearable%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclearable%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclearable%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="请输入姓名" clearable></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" clearable></gf-input>
</div>
</template></DemoAndCode>
<h4 id="显示输出长度" tabindex="-1"><a class="header-anchor" href="#显示输出长度" aria-hidden="true">#</a> 显示输出长度</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%20maxlength%3D%2210%22%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%22%20type%3D%22textarea%22%20maxlength%3D%2210%22%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Emaxlength%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E10%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AE%A1%E6%89%B9%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Emaxlength%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E10%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="请输入姓名" maxlength="10"></gf-input>
  <gf-input placeholder="请输入审批内容" type="textarea" maxlength="10"></gf-input>
</div>
</template></DemoAndCode>
<h4 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E6%88%90%E5%8A%9F%22%20status%3D%22success%22%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E4%BF%A1%E6%81%AF%22%20status%3D%22info%22%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%AD%A6%E5%91%8A%22%20status%3D%22warning%22%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E9%94%99%E8%AF%AF%22%20status%3D%22error%22%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%88%90%E5%8A%9F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estatus%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esuccess%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E4%BF%A1%E6%81%AF%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estatus%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einfo%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%AD%A6%E5%91%8A%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estatus%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ewarning%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E9%94%99%E8%AF%AF%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estatus%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eerror%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="成功" status="success"></gf-input>
  <gf-input placeholder="信息" status="info"></gf-input>
  <gf-input placeholder="警告" status="warning"></gf-input>
  <gf-input placeholder="错误" status="error"></gf-input>
</div>
</template></DemoAndCode>
<h4 id="textarea配置" tabindex="-1"><a class="header-anchor" href="#textarea配置" aria-hidden="true">#</a> textarea配置</h4>

      <DemoAndCode
        htmlStr="%3Cdiv%20class%3D%22input%20borders%22%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E8%87%AA%E9%80%82%E5%BA%94%E6%96%87%E6%9C%AC%E9%AB%98%E5%BA%A6%22%20type%3D%22textarea%22%20autosize%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E5%9B%BA%E5%AE%9A%E5%88%97%E6%95%B0%E4%B8%94%E4%B8%8D%E5%8F%AF%E6%8B%96%E5%8A%A8%22%20type%3D%22textarea%22%20rows%3D%224%22%20resize%3D%22none%22%3E%3C%2Fgf-input%3E%0A%20%20%3Cgf-input%20placeholder%3D%22%E6%9C%80%E5%B0%913%E5%88%97%E6%9C%80%E5%A4%A710%E5%88%97%22%20type%3D%22textarea%22%20min-rows%3D%223%22%20max-rows%3D%2210%22%3E%3C%2Fgf-input%3E%0A%3C%2Fdiv%3E%0A"
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
        highlightCodeStr="%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einput%20borders%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E8%87%AA%E9%80%82%E5%BA%94%E6%96%87%E6%9C%AC%E9%AB%98%E5%BA%A6%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eautosize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%9B%BA%E5%AE%9A%E5%88%97%E6%95%B0%E4%B8%94%E4%B8%8D%E5%8F%AF%E6%8B%96%E5%8A%A8%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Erows%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E4%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eresize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Enone%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Egf-input%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%9C%80%E5%B0%913%E5%88%97%E6%9C%80%E5%A4%A710%E5%88%97%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etextarea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Emin-rows%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E3%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Emax-rows%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E10%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Egf-input%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A"
      >
        <template #demo>
    <div class="input borders">
  <gf-input placeholder="自适应文本高度" type="textarea" autosize></gf-input>
  <gf-input placeholder="固定列数且不可拖动" type="textarea" rows="4" resize="none"></gf-input>
  <gf-input placeholder="最少3列最大10列" type="textarea" min-rows="3" max-rows="10"></gf-input>
</div>
</template></DemoAndCode>
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
<td>type</td>
<td>原生属性</td>
<td>string</td>
<td>input / textarea</td>
<td>input</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>显示清除按钮</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value</td>
<td>默认展示的值</td>
<td>-</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>maxlength</td>
<td>输入长度的限制</td>
<td>-</td>
<td>—</td>
<td>无限</td>
</tr>
<tr>
<td>status</td>
<td>输入框的状态</td>
<td>success / info /  warning /  error</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>iconFontSize</td>
<td>默认图标的大小</td>
<td>-</td>
<td>—</td>
<td>20</td>
</tr>
<tr>
<td>iconColor</td>
<td>图标的颜色</td>
<td>-</td>
<td>—</td>
<td>#ccc</td>
</tr>
<tr>
<td>placeholder</td>
<td>提示</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>autofocus</td>
<td>设置自动获取焦点</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>resize</td>
<td>是否支持拖拽下拉</td>
<td>string</td>
<td>none / both / horizontal / vertical</td>
<td>vertical</td>
</tr>
<tr>
<td>minRows</td>
<td>最[小]列支持</td>
<td>string / number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>maxRows</td>
<td>最[大]列支持</td>
<td>string / number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>rows</td>
<td>定制列</td>
<td>string / number</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>自动适配列表</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<CommentService></CommentService></div></template>
