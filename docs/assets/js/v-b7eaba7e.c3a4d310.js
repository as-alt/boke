"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[3766],{1987:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-b7eaba7e",path:"/guide/js%E9%AB%98%E7%BA%A7/%E6%89%8B%E5%86%99instanceof%E6%96%B9%E6%B3%95.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"手写instanceof方法",slug:"手写instanceof方法",children:[]}],filePathRelative:"guide/js高级/手写instanceof方法.md",git:{}}},4804:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h2 id="手写instanceof方法" tabindex="-1"><a class="header-anchor" href="#手写instanceof方法" aria-hidden="true">#</a> 手写instanceof方法</h2><h4 id="instanceof原理" tabindex="-1"><a class="header-anchor" href="#instanceof原理" aria-hidden="true">#</a> instanceof原理</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a <span class="token keyword">instanceof</span> <span class="token class-name">b</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>判断b函数的prototype显式原型是否在a对象的__proto__隐式原型链上</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span>right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>__proto__<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>__proto__<span class="token operator">===</span>right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>__proto__<span class="token punctuation">,</span>right<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',5),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);