"use strict";(self.webpackChunkaaa=self.webpackChunkaaa||[]).push([[1449],{6203:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5a261bba",path:"/guide/%E9%9D%A2%E8%AF%95%E5%88%B7%E9%A2%98/VUE/%E5%8E%9F%E7%90%86/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"模板编译",slug:"模板编译",children:[]}],filePathRelative:"guide/面试刷题/VUE/原理/模板编译.md",git:{}}},9145:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h2 id="模板编译" tabindex="-1"><a class="header-anchor" href="#模板编译" aria-hidden="true">#</a> 模板编译</h2><p>在vue中是使用虚拟DOM转换为真实DOM实现渲染的，就是通过模板编译并使用with()方法来转换为虚拟DOM</p><ul><li>普通使用</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>//_c ==&gt; creatElement 创建节点\n//_v ==&gt;crearTextVnode 创建文本Vnode\n//_s ==&gt;toString 转字符串\n//_l ==&gt;renderList 渲染列表\n\n//正常使用\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n    {{message}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n//模板编译为虚拟DOM\nwith(this){\n\treturn _c(&#39;p&#39;,[_v(_s(message))])\n}\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><p>条件表达式</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    {{flag?message:&#39;message not found&#39;}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n//编译\nwith(this){\n\treturn _c(&#39;div&#39;,[_v(_s(flag?message:&#39;message not found&#39;))])\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>条件判断</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flag===a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n//编译\nwith(this){\n\treturn _c(&#39;div&#39;,[(flag===a)?_c(&#39;div&#39;,[_v(&#39;a&#39;)]):_c(&#39;div&#39;,[_v(&#39;b&#39;)])])\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>列表渲染</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item) in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n//编译\nwith(this){\n\treturn _c(&#39;ul&#39;,_l((list),function(item){return _c(&#39;li&#39;,{key:item.id},[_v(_s(item))])}),0)\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>属性绑定</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgUrl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n//编译\nwith(this){\n\treturn _c(&#39;div&#39;,{staticClass:&#39;box&#39;,attrs:{&#39;id&#39;:&#39;content&#39;}},[_c(&#39;img&#39;,{attrs:{&#39;src&#39;:imgUrl}})])\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>双向绑定</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">&gt;</span></span>\n//编译\nwith(this){return _c(&#39;input&#39;,{directives:[{name:&quot;model&quot;,rawName:&quot;v-model&quot;,value:(text),expression:&quot;text&quot;}],domProps:{&quot;value&quot;:(text)},on:{&quot;input&quot;:function($event){if($event.target.composing)return;text=$event.target.value}}})}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul>',5),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);