"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[4474],{1277:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-48ab9a7a",path:"/guide/%E9%9D%A2%E8%AF%95%E5%88%B7%E9%A2%98/%E6%89%8B%E5%86%99%E9%A2%98/%E9%98%B2%E6%8A%96.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"防抖",slug:"防抖",children:[]}],filePathRelative:"guide/面试刷题/手写题/防抖.md",git:{}}},2781:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\t<span class="token keyword">function</span> <span class="token function">debonce</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">let</span> timer<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>time<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">debonce</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n    document<span class="token punctuation">.</span><span class="token function">addEventListen</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token function">fn</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',2),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);