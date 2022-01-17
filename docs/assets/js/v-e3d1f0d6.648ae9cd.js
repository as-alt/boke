"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[9833],{4635:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-e3d1f0d6",path:"/guide/js%E9%AB%98%E7%BA%A7/%E9%97%AD%E5%8C%85%E5%88%9B%E5%BB%BAjs%E6%A8%A1%E5%9D%97.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"闭包创建js模块",slug:"闭包创建js模块",children:[]}],filePathRelative:"guide/js高级/闭包创建js模块.md",git:{}}},8011:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const p=(0,a(6252).uE)('<h2 id="闭包创建js模块" tabindex="-1"><a class="header-anchor" href="#闭包创建js模块" aria-hidden="true">#</a> 闭包创建js模块</h2><h4 id="js模块" tabindex="-1"><a class="header-anchor" href="#js模块" aria-hidden="true">#</a> js模块</h4><p>包含特定方法和变量的js文件</p><p>在函数内创建变量或属性（私有）</p><p>将方法或属性暴露出去操作</p><p>方法一</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//创建一个单独的js文件</span>\n<span class="token keyword">function</span> <span class="token function">myModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;xiaochen&#39;</span>\n    <span class="token keyword">function</span> <span class="token function">sayUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">function</span> <span class="token function">sayLow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//将多个方法或属性暴露出去</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        sayUp<span class="token punctuation">,</span>\n        sayLow\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//引入js文件</span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./module.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n\t<span class="token keyword">let</span> module <span class="token operator">=</span> <span class="token function">myModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//获得暴露出来的对象</span>\n\tmodule<span class="token punctuation">.</span><span class="token function">sayUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//XIAOCHEN</span>\n\tmodule<span class="token punctuation">.</span><span class="token function">sayLow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//xiaochen</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>方法二</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//创建一个单独的js文件</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">myModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;xiaodeng&#39;</span>\n     <span class="token keyword">function</span> <span class="token function">sayUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">function</span> <span class="token function">sayLow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//将多个方法或属性暴露出去</span>\n    window<span class="token punctuation">.</span>myModule <span class="token operator">=</span> <span class="token punctuation">{</span>\n        sayUp<span class="token punctuation">,</span>\n        sayLow\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//引入js文件</span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./module.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n\tmyModule<span class="token punctuation">.</span><span class="token function">sayUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//XIAODENG</span>\n\tmyModule<span class="token punctuation">.</span><span class="token function">sayLow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//xiaodeng</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',9),t={},o=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);