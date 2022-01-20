"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[9791],{6542:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-c6e17626",path:"/guide/%E9%9D%A2%E8%AF%95%E5%88%B7%E9%A2%98/JAVASCRIPT/%E9%98%B2%E6%8A%96.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"防抖",slug:"防抖",children:[]}],filePathRelative:"guide/面试刷题/JAVASCRIPT/防抖.md",git:{}}},3160:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><h4 id="概念-当持续触发事件-一定时间内没有触发-事件才会执行一次-当在时间结束前事件被再次触发则重新计时" tabindex="-1"><a class="header-anchor" href="#概念-当持续触发事件-一定时间内没有触发-事件才会执行一次-当在时间结束前事件被再次触发则重新计时" aria-hidden="true">#</a> 概念:当持续触发事件,一定时间内没有触发,事件才会执行一次,当在时间结束前事件被再次触发则重新计时</h4><p>使用定时器完成,如果时间内再次触发清除定时器,为保证能清除定时器,要利用闭包将定时器始终存储在内存中</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n\n<span class="token keyword">let</span> dom <span class="token operator">=</span> docment<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">//防抖函数</span>\n<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timer<span class="token punctuation">;</span>\n    <span class="token comment">//利用闭包保存定时器,方便清除</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//清除定时器</span>\n    \t<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n    \t<span class="token comment">//设置定时器</span>\n    \t<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n        \tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n    \t<span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> timeInput <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token comment">//绑定监听事件</span>\ndom<span class="token punctuation">.</span><span class="token function">addEventlistener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">timeInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',4),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);