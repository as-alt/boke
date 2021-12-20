"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[972],{5928:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-25c0559e",path:"/guide/js%E9%AB%98%E7%BA%A7/%E7%B1%BB%E5%9E%8B%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"类型相关问题",slug:"类型相关问题",children:[]}],filePathRelative:"guide/js高级/类型相关问题.md",git:{}}},5567:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});const e=(0,s(6252).uE)('<h2 id="类型相关问题" tabindex="-1"><a class="header-anchor" href="#类型相关问题" aria-hidden="true">#</a> 类型相关问题</h2><h4 id="undefined和null的区别" tabindex="-1"><a class="header-anchor" href="#undefined和null的区别" aria-hidden="true">#</a> undefined和null的区别</h4><p>undefined:初始化了变量,但是未赋值</p><p>null:赋值了,但是值为null</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token comment">//undefined</span>\na <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token comment">//null</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="什么时候使用null" tabindex="-1"><a class="header-anchor" href="#什么时候使用null" aria-hidden="true">#</a> 什么时候使用null</h4><p>1.当你想要初始化之后给变量赋值对象类型的数值时,可以在初始化时先给变量赋值null,以便其他人更方便看出(只是一个小tips，并不是强制要求)</p><p><strong>2.当将变量赋值为引用类型是，实际上变量存储的是存放在堆内存里对象的地址(指针),由于浏览器垃圾回收机制,当对象被引用时,不会被垃圾回收机制处理,所以为了及时将不再需要使用的对象被回收,可以使用null切断变量对对象的引用</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\na <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span><span class="token string">&#39;小陈&#39;</span>\n<span class="token punctuation">}</span>\na <span class="token operator">=</span> <span class="token keyword">null</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',9),p={},l=(0,s(3744).Z)(p,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);