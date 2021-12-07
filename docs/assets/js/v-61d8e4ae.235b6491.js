"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[780],{1061:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-61d8e4ae",path:"/guide/js%E9%AB%98%E7%A8%8B%E6%89%8B%E8%AE%B0/Array.from%E5%92%8CArray.of.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Array.from",slug:"array-from",children:[]},{level:2,title:"Array.of",slug:"array-of",children:[]}],filePathRelative:"guide/js高程手记/Array.from和Array.of.md",git:{}}},3878:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from</h2><h4 id="将类数组转换为数组" tabindex="-1"><a class="header-anchor" href="#将类数组转换为数组" aria-hidden="true">#</a> 将类数组转换为数组</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">msg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token number">1</span>\n    <span class="token keyword">yield</span> <span class="token number">2</span>\n    <span class="token keyword">yield</span> <span class="token number">3</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token comment">//[1,2,3]</span>\n\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>\n    length<span class="token operator">:</span><span class="token number">3</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> arr1 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//[1,2,undefind]</span>\n\n<span class="token comment">//第二个参数为函数,相当于使用Array.map()遍历数组</span>\n<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>\n<span class="token keyword">let</span> arr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> item<span class="token operator">+</span><span class="token string">&#39;1&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//[h1,e1,l1,l1,o1]</span>\n\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">//[1,2,3,4]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of</h2><h4 id="将一组参数转换为数组" tabindex="-1"><a class="header-anchor" href="#将一组参数转换为数组" aria-hidden="true">#</a> 将一组参数转换为数组</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">//[1,2,3,4]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);