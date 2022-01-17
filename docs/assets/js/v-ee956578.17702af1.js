"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[1535],{1082:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-ee956578",path:"/guide/js%E9%AB%98%E7%BA%A7/%E5%AF%B9%E8%B1%A1.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"对象",slug:"对象",children:[]}],filePathRelative:"guide/js高级/对象.md",git:{}}},3568:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><h4 id="什么是对象" tabindex="-1"><a class="header-anchor" href="#什么是对象" aria-hidden="true">#</a> 什么是对象</h4><p>使用键对值的方式存储多条数据</p><h4 id="为什么使用对象" tabindex="-1"><a class="header-anchor" href="#为什么使用对象" aria-hidden="true">#</a> 为什么使用对象</h4><p>一个变量名存储多条数据</p><h4 id="取值的方式" tabindex="-1"><a class="header-anchor" href="#取值的方式" aria-hidden="true">#</a> 取值的方式</h4><p>方式一:对象.属性名</p><p>操作简单,有时不能用</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span><span class="token string">&#39;小陈&#39;</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">setName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> value\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nobj<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;小李&#39;</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token comment">//小李</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>方式二:对象[&quot;属性名&quot;]</p><p>操作复杂,通用</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span><span class="token string">&quot;小陈&quot;</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span>\n\t<span class="token function-variable function">setName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> value\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nobj<span class="token punctuation">[</span><span class="token string">&#39;setName&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">&#39;小李&#39;</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//小李</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="什么时候使用第二种方式" tabindex="-1"><a class="header-anchor" href="#什么时候使用第二种方式" aria-hidden="true">#</a> 什么时候使用第二种方式</h4><p>1.当属性名使用特殊符号时,- 空格等</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>content<span class="token operator">-</span>type <span class="token operator">=</span> <span class="token string">&#39;text/json&#39;</span><span class="token punctuation">;</span><span class="token comment">//报错</span>\nobj<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;text/json&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//{content-type: &#39;text/json&#39;}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2.当属性名不确定时</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;myName&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>name <span class="token operator">=</span> age<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//{name:22}</span>\nobj<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//{myName:22}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',17),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);