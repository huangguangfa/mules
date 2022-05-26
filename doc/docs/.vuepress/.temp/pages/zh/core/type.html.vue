<template><div><h1 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h1>
<h1 id="核心类" tabindex="-1"><a class="header-anchor" href="#核心类" aria-hidden="true">#</a> 核心类</h1>
<div class="custom-container tip"><p class="custom-container-title">提供数据类型判断</p>
</div>
<h3 id="isobject" tabindex="-1"><a class="header-anchor" href="#isobject" aria-hidden="true">#</a> <code v-pre>isObject</code></h3>
<ul>
<li>是否为对象</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'gf'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isemptyobject" tabindex="-1"><a class="header-anchor" href="#isemptyobject" aria-hidden="true">#</a> <code v-pre>isEmptyObject</code></h3>
<ul>
<li>空对象</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'gf'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isplainobject" tabindex="-1"><a class="header-anchor" href="#isplainobject" aria-hidden="true">#</a> <code v-pre>isPlainObject</code></h3>
<ul>
<li>是否为纯粹对象(非window或者系统对象)</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isarray" tabindex="-1"><a class="header-anchor" href="#isarray" aria-hidden="true">#</a> <code v-pre>isArray</code></h3>
<ul>
<li>是否是数组</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isemptyarray" tabindex="-1"><a class="header-anchor" href="#isemptyarray" aria-hidden="true">#</a> <code v-pre>isEmptyArray</code></h3>
<ul>
<li>是否是【空】数组</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isEmptyArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction" aria-hidden="true">#</a> <code v-pre>isFunction</code></h3>
<ul>
<li>是否为函数</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">'gf-ui'</span> <span class="token punctuation">}</span>
Type<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isemptyfuction" tabindex="-1"><a class="header-anchor" href="#isemptyfuction" aria-hidden="true">#</a> <code v-pre>isEmptyFuction</code></h3>
<ul>
<li>是否为【空】函数</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">'gf-ui'</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyFuction</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyFuction</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isEmptyFuction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> <code v-pre>isString</code></h3>
<ul>
<li>是否为字符串</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isstring-1" tabindex="-1"><a class="header-anchor" href="#isstring-1" aria-hidden="true">#</a> <code v-pre>isString</code></h3>
<ul>
<li>是否为【空】字符串</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isEmptyString</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isjsonstring" tabindex="-1"><a class="header-anchor" href="#isjsonstring" aria-hidden="true">#</a> <code v-pre>isJsonString</code></h3>
<ul>
<li>是否为【JSON】字符串</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isJsonString</span><span class="token punctuation">(</span><span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isJsonString</span><span class="token punctuation">(</span><span class="token string">'[{"name":"gf-ui"}]'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> <code v-pre>isNumber</code></h3>
<ul>
<li>是否为数字</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isboolean" tabindex="-1"><a class="header-anchor" href="#isboolean" aria-hidden="true">#</a> <code v-pre>isBoolean</code></h3>
<ul>
<li>是否为布尔</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isguid" tabindex="-1"><a class="header-anchor" href="#isguid" aria-hidden="true">#</a> <code v-pre>isGuid</code></h3>
<ul>
<li>是否为GUID</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isGuid</span><span class="token punctuation">(</span><span class="token string">"CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isemail" tabindex="-1"><a class="header-anchor" href="#isemail" aria-hidden="true">#</a> <code v-pre>isEmail</code></h3>
<ul>
<li>是否为正确的邮箱格式</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">"1454556135@qq.com"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isidcard" tabindex="-1"><a class="header-anchor" href="#isidcard" aria-hidden="true">#</a> <code v-pre>isIdCard</code></h3>
<ul>
<li>是否为正确的身份证</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isIdCard</span><span class="token punctuation">(</span><span class="token string">"360731199309078781"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isphone" tabindex="-1"><a class="header-anchor" href="#isphone" aria-hidden="true">#</a> <code v-pre>isPhone</code></h3>
<ul>
<li>是否为电话(手机+座机)</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token string">"010-66668888"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token string">"18720706349"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="ismobilephone" tabindex="-1"><a class="header-anchor" href="#ismobilephone" aria-hidden="true">#</a> <code v-pre>isMobilePhone</code></h3>
<ul>
<li>是否为手机</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isMobilePhone</span><span class="token punctuation">(</span><span class="token string">"18720706349"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="istelphone" tabindex="-1"><a class="header-anchor" href="#istelphone" aria-hidden="true">#</a> <code v-pre>isTelPhone</code></h3>
<ul>
<li>是否为座机</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isTelPhone</span><span class="token punctuation">(</span><span class="token string">"010-66668888"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="isvalidpassword" tabindex="-1"><a class="header-anchor" href="#isvalidpassword" aria-hidden="true">#</a> <code v-pre>isValidPassword</code></h3>
<ul>
<li>是否为合法密码(由8~30位数字/字母/下划线组成)</li>
<li><code v-pre>参数(optinons)</code>
<ul>
<li>默认值：{ min:8, max:30 }</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isValidPassword</span><span class="token punctuation">(</span><span class="token string">"gf-ui"</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isValidPassword</span><span class="token punctuation">(</span><span class="token string">"gf-ui/core@1.0.0"</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isValidPassword</span><span class="token punctuation">(</span><span class="token string">'gf-ui/core@1.0.0'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isvaliddate" tabindex="-1"><a class="header-anchor" href="#isvaliddate" aria-hidden="true">#</a> <code v-pre>isValidDate</code></h3>
<ul>
<li>是否为合法日期</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isValidDate</span><span class="token punctuation">(</span><span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isValidDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isValidDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="istrueorzero" tabindex="-1"><a class="header-anchor" href="#istrueorzero" aria-hidden="true">#</a> <code v-pre>isTrueOrZero</code></h3>
<ul>
<li>是否为真或0(排除null,undefined)</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">isTrueOrZero</span><span class="token punctuation">(</span><span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isTrueOrZero</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Type<span class="token punctuation">.</span><span class="token function">isTrueOrZero</span><span class="token punctuation">(</span><span class="token string">'0'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

Type<span class="token punctuation">.</span><span class="token function">isTrueOrZero</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Type<span class="token punctuation">.</span><span class="token function">isTrueOrZero</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="isvaliddate-1" tabindex="-1"><a class="header-anchor" href="#isvaliddate-1" aria-hidden="true">#</a> <code v-pre>isValidDate</code></h3>
<ul>
<li>转化默认值(当值为undefined 和 null)</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// 'gf-ui'</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// 'gf-ui'</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token string">'@gf-ui/core'</span><span class="token punctuation">,</span> <span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// @gf-ui/core</span>
</code></pre></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <code v-pre>json</code></h3>
<ul>
<li>JSON转化(当转化不成功则返回默认值)</li>
</ul>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code>Type<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'gf-ui'</span><span class="token punctuation">)</span> <span class="token comment">// gf-ui</span>
Type<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// []</span>
Type<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {}</span>
Type<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">'[{"name":"gf-ui"}]'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [{ "name": "gf-ui" }]</span>
</code></pre></div></div></template>
