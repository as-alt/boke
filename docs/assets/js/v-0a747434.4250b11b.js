"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[4100],{6915:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0a747434",path:"/guide/js%E9%AB%98%E7%A8%8B%E6%89%8B%E8%AE%B0/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"普通函数创建",slug:"普通函数创建",children:[]},{level:2,title:"构造函数创建",slug:"构造函数创建",children:[]},{level:2,title:"原型创建",slug:"原型创建",children:[]}],filePathRelative:"guide/js高程手记/工厂模式.md",git:{}}},8382:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="普通函数创建" tabindex="-1"><a class="header-anchor" href="#普通函数创建" aria-hidden="true">#</a> 普通函数创建</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parent</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    obj<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n    obj<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> obj\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token comment">//{name: &#39;小李&#39;, age: 19, sayName: ƒ}</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;小王&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token comment">//{name:&#39;小王&#39;，age:20,sayName:ƒ}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="构造函数创建" tabindex="-1"><a class="header-anchor" href="#构造函数创建" aria-hidden="true">#</a> 构造函数创建</h2><h4 id="new-实例时发生了什么" tabindex="-1"><a class="header-anchor" href="#new-实例时发生了什么" aria-hidden="true">#</a> new 实例时发生了什么</h4><ol><li><p>创建一个新对象</p></li><li><p>将新对象的[[prototype]]赋值为构造函数的prototype属性</p></li><li><p>构造函数内部的this指向新对象</p></li><li><p>执行构造函数内部的代码（给新对象添加属性）</p></li><li><p>如果构造函数没有返回对象，则返回创建的新对象</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token comment">//Parent {name: &#39;小李&#39;, age: 20, sayName: ƒ}</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">&quot;小王&quot;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token comment">//Parent {name: &#39;小王&#39;, age: 19, sayName: ƒ}</span>\n<span class="token comment">//问题:构造函数上的定义的方法会在每个实例上都创建一遍，尽管方法名和方法内容一样，但是不相等</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>sayName <span class="token operator">==</span> b<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token comment">//false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="原型创建" tabindex="-1"><a class="header-anchor" href="#原型创建" aria-hidden="true">#</a> 原型创建</h2><h4 id="为解决构造函数的问题可以使用原型创建" tabindex="-1"><a class="header-anchor" href="#为解决构造函数的问题可以使用原型创建" aria-hidden="true">#</a> 为解决构造函数的问题可以使用原型创建</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n    <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">&quot;小张&quot;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token comment">//Parent {name: &#39;小张&#39;, age: 19}</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token comment">//Parent {name: &#39;小李&#39;, age: 20}</span>\n<span class="token comment">//构造函数定义的方法被放置到了原型上（如下图所示），根据原型链查找到该方法调用，即使实例上没有这个方法，也会在原型上找到，如果在原型链最后一层都未找到，那就会报错</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>sayName<span class="token operator">==</span>b<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token comment">//true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img src="/boke/js高程/原型创建工厂模式.png" alt=""></p>',10),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);