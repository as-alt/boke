"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[238],{6138:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-a8b651e0",path:"/guide/js%E9%AB%98%E7%A8%8B%E6%89%8B%E8%AE%B0/%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"为单个对象属性配置",slug:"为单个对象属性配置",children:[]},{level:2,title:"为多个对象属性配置",slug:"为多个对象属性配置",children:[]}],filePathRelative:"guide/js高程手记/对象属性配置.md",git:{}}},6576:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="为单个对象属性配置" tabindex="-1"><a class="header-anchor" href="#为单个对象属性配置" aria-hidden="true">#</a> 为单个对象属性配置</h2><h4 id="可枚举-可配置-可修改" tabindex="-1"><a class="header-anchor" href="#可枚举-可配置-可修改" aria-hidden="true">#</a> 可枚举 可配置 可修改</h4><p>enumerable configurable writable</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n    value<span class="token operator">:</span><span class="token string">&quot;小陈&quot;</span><span class="token punctuation">,</span>\n    configurable<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否可配置，false不可删除</span>\n    writable<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否可修改，false不可修改</span>\n    enumerable<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否可枚举,false不可枚举</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token comment">//obj,{name:&quot;小陈&quot;}</span>\nobj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;小李&quot;</span>\n<span class="token comment">//由于属性上的writable设为了不可修改,所以更改赋值无效</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token comment">//obj,{name:&quot;小陈&quot;}</span>\n<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name\n<span class="token comment">//由于属性上的configurable设为了不可配置,所以无法删除</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token comment">//obj,{name:&quot;小陈&quot;}</span>\n<span class="token comment">//由于属性上的enumerable设为了false，所以无法将该属性枚举</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//[]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="获得-设置" tabindex="-1"><a class="header-anchor" href="#获得-设置" aria-hidden="true">#</a> 获得 设置</h4><p>get set</p><h4 id="暂时没找到使用场景" tabindex="-1"><a class="header-anchor" href="#暂时没找到使用场景" aria-hidden="true">#</a> 暂时没找到使用场景</h4><p>如果get设置了，set未设置那么属性就是只读的,</p><p>如果set设置了,get未设置那么属性不可读取</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    _name<span class="token operator">:</span><span class="token string">&quot;小陈&quot;</span>\n<span class="token punctuation">}</span>\n\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> val\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token comment">//&quot;小陈&quot;</span>\nobj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;小李&quot;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//{_name:&quot;小李&quot;}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="为多个对象属性配置" tabindex="-1"><a class="header-anchor" href="#为多个对象属性配置" aria-hidden="true">#</a> 为多个对象属性配置</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">{</span>\n    _name<span class="token operator">:</span><span class="token punctuation">{</span>\n        value<span class="token operator">:</span><span class="token string">&#39;小陈&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span><span class="token punctuation">{</span>\n        value<span class="token operator">:</span><span class="token number">19</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> val\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',12),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);