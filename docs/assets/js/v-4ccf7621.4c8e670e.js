"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[8806],{5827:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4ccf7621",path:"/guide/js%E9%AB%98%E7%A8%8B%E6%89%8B%E8%AE%B0/number%E7%B1%BB%E5%9E%8B.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"number类型",slug:"number类型",children:[]}],filePathRelative:"guide/js高程手记/number类型.md",git:{}}},3564:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h2 id="number类型" tabindex="-1"><a class="header-anchor" href="#number类型" aria-hidden="true">#</a> number类型</h2><h4 id="数值范围" tabindex="-1"><a class="header-anchor" href="#数值范围" aria-hidden="true">#</a> 数值范围</h4><p>Number.MIN_VALUE 浏览器支持的最小值</p><p>Number.MAX_VALUE 浏览器支持的最大值</p><p>使用isFinite(变量)判断值是否在最大和最小的范围内</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">min</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span><span class="token comment">//min 5e-324</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">max</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token comment">//max 1.7976931348623157e+308</span>\n       <span class="token keyword">let</span> maxNum <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token operator">+</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">maxNum</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> maxNum<span class="token punctuation">)</span><span class="token comment">//maxNum Infinity</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">maxNum</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token function">isFinite</span><span class="token punctuation">(</span>maxNum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//maxNum false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',6),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);