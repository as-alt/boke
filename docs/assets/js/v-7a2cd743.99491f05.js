"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[817],{6908:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7a2cd743",path:"/guide/js%E9%AB%98%E7%BA%A7/%E9%97%AD%E5%8C%85%E7%9A%84%E4%BD%9C%E7%94%A8.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"闭包的作用",slug:"闭包的作用",children:[]}],filePathRelative:"guide/js高级/闭包的作用.md",git:{}}},2415:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="闭包的作用" tabindex="-1"><a class="header-anchor" href="#闭包的作用" aria-hidden="true">#</a> 闭包的作用</h2><h4 id="函数执行完成后-函数内部的局部变量依然存在-延长局部变量生命周期" tabindex="-1"><a class="header-anchor" href="#函数执行完成后-函数内部的局部变量依然存在-延长局部变量生命周期" aria-hidden="true">#</a> 函数执行完成后,函数内部的局部变量依然存在(延长局部变量生命周期)</h4><p>使用闭包，函数内部的变量不会因为函数执行完成销毁,因为变量存在于闭包中,<strong>内部函数fn2在栈中会销毁,但函数体不会销毁,因为全局变量f引用了fn2函数体,如果没有引用fn2函数体或者切断了引用关系，那么函数体也会销毁</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        a<span class="token operator">--</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> fn2\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//2</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//1</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//0</span>\nf <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//删除引用,闭包函数成为垃圾对象，被销毁</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="使外部能够操作函数内部的变量" tabindex="-1"><a class="header-anchor" href="#使外部能够操作函数内部的变量" aria-hidden="true">#</a> 使外部能够操作函数内部的变量</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        a<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> fn2\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//4</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//5</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//6</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',6),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);