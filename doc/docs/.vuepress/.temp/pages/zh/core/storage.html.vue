<template><div><h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h1>
<h1 id="核心类" tabindex="-1"><a class="header-anchor" href="#核心类" aria-hidden="true">#</a> 核心类</h1>
<div class="custom-container tip"><p class="custom-container-title">本地存储封装 【基于locaScorage、sessionStorage + Ctypto数据加密】</p>
</div>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> <code v-pre>set</code></h3>
<ul>
<li>设置指定key和value到会话储存实例中</li>
<li><code v-pre>参数</code>
<ul>
<li><code v-pre>options:{ cryptoType:{ name:string }, storageType: session | local }</code></li>
<li><code v-pre>options[cryptoType] = { name:&quot;none&quot; }</code> 加密类型（默认：不加密, <span class="colorff0066 font-bold">加密仅限于  AES、DES、RC4</span>）</li>
<li><code v-pre>options[storageType] = { storageType: local | session }</code> 存储位置（默认：session）</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"web"</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> def <span class="token operator">=</span> <span class="token string">'mate-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"@gf-ui/core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"@gf-ui/web"</span>
<span class="token punctuation">}</span>
Storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">,</span> values<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span>
Storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">,</span> values<span class="token punctuation">.</span>core<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cryptoType</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AES'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加密存储</span>
</code></pre></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> <code v-pre>get</code></h3>
<ul>
<li>设置指定key和value到会话储存实例中</li>
<li><code v-pre>参数</code>
<ul>
<li><code v-pre>options:{ cryptoType:{ name:string }, storageType: session | local }</code></li>
<li><code v-pre>options[cryptoType] = { name:&quot;none&quot; }</code> 加密类型（默认：不加密, <span class="colorff0066 font-bold">加密仅限于  AES、DES、RC4</span>）</li>
<li><code v-pre>options[storageType] = { storageType:&quot;session&quot; }</code> 存储位置（默认：session）</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"web"</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> def <span class="token operator">=</span> <span class="token string">'mate-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"@gf-ui/core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"@gf-ui/web"</span>
<span class="token punctuation">}</span>
Storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">,</span> values<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span>
Storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>web<span class="token punctuation">,</span> values<span class="token punctuation">.</span>web<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cryptoType</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AES'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加密存储</span>

Storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// @gf-ui/core</span>
Storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// da7f42d8b5eed1a6aaa14db66767a004</span>
Storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>web<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cryptoType</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AES'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// @gf-ui/web</span>
</code></pre></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> <code v-pre>remove</code></h3>
<ul>
<li>删除<code v-pre>本地缓存</code>或<code v-pre>会话缓存</code>指定的key  <code v-pre>storageType默认：session</code></li>
<li><code v-pre>参数</code>
<ul>
<li><code v-pre>(key:string, storageType:local | session) =&gt; void</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"web"</span>
<span class="token punctuation">}</span>
Storage<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="contains" tabindex="-1"><a class="header-anchor" href="#contains" aria-hidden="true">#</a> <code v-pre>contains</code></h3>
<ul>
<li>获取<code v-pre>本地缓存</code>或<code v-pre>会话缓存</code>中是否包含指定key的实例 <code v-pre>storageType 默认：session</code></li>
<li><code v-pre>参数</code>
<ul>
<li><code v-pre>(key:string, storageType:local | session) =&gt; boolean</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"web"</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>Storage<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'包含'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre></div><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> <code v-pre>count</code></h3>
<ul>
<li>获取<code v-pre>本地缓存</code>或<code v-pre>会话缓存</code>是否包含指定key的实例 <code v-pre>storageType 默认 ：session</code></li>
<li><code v-pre>参数</code>
<ul>
<li><code v-pre>(storageType:local | session) =&gt; number</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前会话存储数量'</span><span class="token punctuation">,</span> Storage<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">'local'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> <code v-pre>clear</code></h3>
<ul>
<li>清除<code v-pre>本地缓存</code>或<code v-pre>会话缓存</code>位置所有内容 <code v-pre>storageType 默认：session</code></li>
<li><code v-pre>参数</code>
<ul>
<li><code v-pre>(storageType:local | session) =&gt; number</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><h3 id="clearall" tabindex="-1"><a class="header-anchor" href="#clearall" aria-hidden="true">#</a> <code v-pre>clearAll</code></h3>
<ul>
<li>清除所有的<code v-pre>本地缓存</code>和<code v-pre>会话缓存</code></li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Storage<span class="token punctuation">.</span><span class="token function">clearAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div></div></template>
