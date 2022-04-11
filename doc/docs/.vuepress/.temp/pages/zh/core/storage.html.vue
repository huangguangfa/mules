<template><h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h1>
<h1 id="核心类" tabindex="-1"><a class="header-anchor" href="#核心类" aria-hidden="true">#</a> 核心类</h1>
<div class="custom-container tip"><p class="custom-container-title">本地存储封装 【基于locaScorage、sessionStorage + Ctypto数据加密】</p>
</div>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> <code>set</code></h3>
<ul>
<li>设置指定key和value到会话储存实例中</li>
<li><code>参数</code>
<ul>
<li><code>options:{ cryptoType:{ name:string }, storageType: session | local }</code></li>
<li><code>options[cryptoType] = { name:&quot;none&quot; }</code> 加密类型（默认：不加密, <span class="colorff0066 font-bold">加密仅限于  AES、DES、RC4</span>）</li>
<li><code>options[storageType] = { storageType: local | session }</code> 存储位置（默认：session）</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> <code>get</code></h3>
<ul>
<li>设置指定key和value到会话储存实例中</li>
<li><code>参数</code>
<ul>
<li><code>options:{ cryptoType:{ name:string }, storageType: session | local }</code></li>
<li><code>options[cryptoType] = { name:&quot;none&quot; }</code> 加密类型（默认：不加密, <span class="colorff0066 font-bold">加密仅限于  AES、DES、RC4</span>）</li>
<li><code>options[storageType] = { storageType:&quot;session&quot; }</code> 存储位置（默认：session）</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> <code>remove</code></h3>
<ul>
<li>删除<code>本地缓存</code>或<code>会话缓存</code>指定的key  <code>storageType默认：session</code></li>
<li><code>参数</code>
<ul>
<li><code>(key:string, storageType:local | session) =&gt; void</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"web"</span>
<span class="token punctuation">}</span>
Storage<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="contains" tabindex="-1"><a class="header-anchor" href="#contains" aria-hidden="true">#</a> <code>contains</code></h3>
<ul>
<li>获取<code>本地缓存</code>或<code>会话缓存</code>中是否包含指定key的实例 <code>storageType 默认：session</code></li>
<li><code>参数</code>
<ul>
<li><code>(key:string, storageType:local | session) =&gt; boolean</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token string">"core"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token string">"web"</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>Storage<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>core<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'包含'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> <code>count</code></h3>
<ul>
<li>获取<code>本地缓存</code>或<code>会话缓存</code>是否包含指定key的实例 <code>storageType 默认 ：session</code></li>
<li><code>参数</code>
<ul>
<li><code>(storageType:local | session) =&gt; number</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前会话存储数量'</span><span class="token punctuation">,</span> Storage<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">'local'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> <code>clear</code></h3>
<ul>
<li>清除<code>本地缓存</code>或<code>会话缓存</code>位置所有内容 <code>storageType 默认：session</code></li>
<li><code>参数</code>
<ul>
<li><code>(storageType:local | session) =&gt; number</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="clearall" tabindex="-1"><a class="header-anchor" href="#clearall" aria-hidden="true">#</a> <code>clearAll</code></h3>
<ul>
<li>清除所有的<code>本地缓存</code>和<code>会话缓存</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Storage<span class="token punctuation">.</span><span class="token function">clearAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
