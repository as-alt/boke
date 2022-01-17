"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[9758],{3977:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-9ac25d50",path:"/guide/js%E9%AB%98%E7%BA%A7/%E5%8E%9F%E5%9E%8B%E9%93%BE.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"原型链",slug:"原型链",children:[]}],filePathRelative:"guide/js高级/原型链.md",git:{}}},71:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h2><h4 id="实例对象根据-proto-隐式原型向下寻找属性和方法" tabindex="-1"><a class="header-anchor" href="#实例对象根据-proto-隐式原型向下寻找属性和方法" aria-hidden="true">#</a> 实例对象根据__proto__隐式原型向下寻找属性和方法</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">test1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test1()&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">test2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test2()&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nfn<span class="token punctuation">.</span><span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nfn<span class="token punctuation">.</span><span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//[object Object]</span>\nfn<span class="token punctuation">.</span>test3<span class="token comment">//undefined</span>\nfn<span class="token punctuation">.</span><span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//errer:no function</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h4><p>当实例对象fn调用test3()方法时，会先在自身上找是否有这个方法或属性,<strong>当没有时</strong>,会继续在__proto__<strong>隐式原型</strong>上找,直到最后一层,由于object原型对象上的__proto__等于null,所以返回no function，如果只是打印输出test3,并不是调用它，则会返回undefined</p><p><img src="/boke/js高级/原型链1.png" alt=""></p><h4 id="构造函数、实例和原型的关系" tabindex="-1"><a class="header-anchor" href="#构造函数、实例和原型的关系" aria-hidden="true">#</a> 构造函数、实例和原型的关系</h4><p>实例上的隐式原型与构造函数中的显式原型指向同一个地址,原型上的构造器指回构造函数</p><p><img src="/boke/js高级/原型链2.png" alt=""></p>',9),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);