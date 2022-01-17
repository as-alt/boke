"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[5561],{6180:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0c20ed00",path:"/guide/%E9%9D%A2%E8%AF%95%E5%88%B7%E9%A2%98/CSS3/%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"水平垂直居中",slug:"水平垂直居中",children:[]}],filePathRelative:"guide/面试刷题/CSS3/水平垂直居中.md",git:{}}},122:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h2><h4 id="不知道子元素宽高" tabindex="-1"><a class="header-anchor" href="#不知道子元素宽高" aria-hidden="true">#</a> 不知道子元素宽高</h4><p>方法一:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>parent<span class="token punctuation">{</span>\n    position<span class="token operator">:</span>relative<span class="token punctuation">;</span>\n    height<span class="token operator">:</span><span class="token number">100</span>vh<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">.</span>children<span class="token punctuation">{</span>\n    position<span class="token operator">:</span>absolute<span class="token punctuation">;</span>\n    left<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>\n    right<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>\n    top<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>\n    bottom<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>\n    margin<span class="token operator">:</span>auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>方法二:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>parent<span class="token punctuation">{</span>\n    display<span class="token operator">:</span>flex<span class="token punctuation">;</span>\n    justify<span class="token operator">-</span>content<span class="token operator">:</span>center<span class="token punctuation">;</span>\n    align<span class="token operator">-</span>items<span class="token operator">:</span>center<span class="token punctuation">;</span>\n    height<span class="token operator">:</span><span class="token number">100</span>vh<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>方法三：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>parent<span class="token punctuation">{</span>\n    position<span class="token operator">:</span>relative<span class="token punctuation">;</span>\n    height<span class="token operator">:</span><span class="token number">100</span>vh<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">.</span>children<span class="token punctuation">{</span>\n    position<span class="token operator">:</span>absolute<span class="token punctuation">;</span>\n    left<span class="token operator">:</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>\n    top<span class="token operator">:</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>\n    transform<span class="token operator">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="知道宽高" tabindex="-1"><a class="header-anchor" href="#知道宽高" aria-hidden="true">#</a> 知道宽高</h4><p>方法一:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>parent<span class="token punctuation">{</span>\n    position<span class="token operator">:</span>relative<span class="token punctuation">;</span>\n    height<span class="token operator">:</span><span class="token number">100</span>vh<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">.</span>children<span class="token punctuation">{</span>\n    position<span class="token operator">:</span>absolute<span class="token punctuation">;</span>\n    width<span class="token operator">:</span><span class="token number">200</span>px<span class="token punctuation">;</span>\n    height<span class="token operator">:</span><span class="token number">200</span>px<span class="token punctuation">;</span>\n    left<span class="token operator">:</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token operator">%</span> <span class="token operator">-</span> <span class="token number">100</span>px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    top<span class="token operator">:</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token operator">%</span> <span class="token operator">-</span> <span class="token number">100</span>px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',11),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);