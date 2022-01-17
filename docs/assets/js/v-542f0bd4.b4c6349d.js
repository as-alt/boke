"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[3972],{9891:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-542f0bd4",path:"/guide/js%E9%AB%98%E7%A8%8B%E6%89%8B%E8%AE%B0/null%E7%B1%BB%E5%9E%8B%E8%8E%B7%E5%8F%96%E7%B1%BB%E5%9E%8B.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"null类型/获取类型",slug:"null类型-获取类型",children:[]}],filePathRelative:"guide/js高程手记/null类型获取类型.md",git:{}}},850:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h2 id="null类型-获取类型" tabindex="-1"><a class="header-anchor" href="#null类型-获取类型" aria-hidden="true">#</a> null类型/获取类型</h2><h4 id="表示声明了变量但是值为空-使用typeof查询数据类型为object-因为null指向一个空对象指针" tabindex="-1"><a class="header-anchor" href="#表示声明了变量但是值为空-使用typeof查询数据类型为object-因为null指向一个空对象指针" aria-hidden="true">#</a> 表示声明了变量但是值为空,使用typeof查询数据类型为object,因为null指向一个空对象指针</h4><p>如果值为null或undefind 可以使用String(变量名)获取类型</p><p>如果需要查询具体的数据类型可以使用object.prototype.toString.call(变量名)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">typeof null</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//typeof null object</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">String(a)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//String(a) null</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Object.prototype.toString.call(a)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//Object.prototype.toString.call(a) [object Null]</span>\n\n       <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">typeof arr</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> arr<span class="token punctuation">)</span><span class="token comment">//typeof arr object</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">String(arr)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//String(arr) 1,2</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Object.prototype.toString.call(arr)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//Object.prototype.toString.call(arr) [object Array]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',5),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);