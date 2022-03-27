"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[5142],{2745:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-da542636",path:"/guide/%E9%9D%A2%E8%AF%95%E5%88%B7%E9%A2%98/%E6%89%8B%E5%86%99%E9%A2%98/call.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"call",slug:"call",children:[]}],filePathRelative:"guide/面试刷题/手写题/call.md",git:{}}},7903:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const p=(0,s(6252).uE)('<h2 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h2><p>call()方法的作用和 apply() 方法类似，区别就是<code>call()</code>方法接受的是<strong>参数列表</strong>，而<code>apply()</code>方法接受的是<strong>一个参数数组</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">!=</span> undefine<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        obj<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>\n        obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',3),t={},e=(0,s(3744).Z)(t,[["render",function(n,a){return p}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,p]of a)s[n]=p;return s}}}]);