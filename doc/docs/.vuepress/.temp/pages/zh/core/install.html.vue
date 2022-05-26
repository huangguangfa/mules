<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<div class="custom-container tip"><p class="custom-container-title">@gf-ui/core</p>
<p>它是核心库也是所有库的<code v-pre>基建</code>、除了给其他库使用也能在业务框架中去使用、默认<code v-pre>导出每一个模块</code>而不是<code v-pre>整体模块</code>、里面都是一些常用的方法属性、其中包括 <code v-pre>Type(类型的判断)</code>、<code v-pre>Crypto(数据加密)</code>、<code v-pre>Storage(本地存储)</code>还包括<code v-pre>formatter(常用的格式化方法)</code>、下面我们去了解下每一块的API的使用规则!</p>
</div>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token comment">// 安装</span>
yarn add @gf<span class="token operator">-</span>ui<span class="token operator">/</span>core 
<span class="token comment">// or</span>
npm install @gf<span class="token operator">-</span>ui<span class="token operator">/</span>core 

<span class="token comment">// ES module使用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Type<span class="token punctuation">,</span> Crypto<span class="token punctuation">,</span> Storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@gf-ui/core"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> gfcore <span class="token keyword">from</span> <span class="token string">"@gf-ui/core"</span> 

<span class="token comment">// common.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Type<span class="token punctuation">,</span> Crypto<span class="token punctuation">,</span> Storage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@gf-ui/core"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gfcore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@gf-ui/core"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div></div></template>
