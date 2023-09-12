(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{602:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"html-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-css"}},[t._v("#")]),t._v(" HTML && CSS")]),t._v(" "),a("h3",{attrs:{id:"html5-新特性、语义化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5-新特性、语义化"}},[t._v("#")]),t._v(" HTML5 新特性、语义化")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("概念")]),t._v("：")]),t._v(" "),a("p",[t._v("HTML5 的语义化指的是"),a("code",[t._v("合理正确的使用语义化的标签来创建页面结构")]),t._v("。【正确的标签做正确的事】")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("语义化标签")]),t._v("：")]),t._v(" "),a("p",[t._v("header nav main article section aside footer")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("语义化的优点")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("在"),a("code",[t._v("没CSS样式的情况下，页面整体也会呈现很好的结构效果")])]),t._v(" "),a("li",[a("code",[t._v("代码结构清晰")]),t._v("，易于阅读，")]),t._v(" "),a("li",[a("code",[t._v("利于开发和维护")]),t._v(" 方便其他设备解析（如屏幕阅读器）根据语义渲染网页。")]),t._v(" "),a("li",[a("code",[t._v("有利于搜索引擎优化（SEO）")]),t._v("，搜索引擎爬虫会根据不同的标签来赋予不同的权重")])])])]),t._v(" "),a("h3",{attrs:{id:"html5-新特性有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5-新特性有哪些"}},[t._v("#")]),t._v(" HTML5 新特性有哪些")]),t._v(" "),a("ul",[a("li",[t._v("语义化标签")]),t._v(" "),a("li",[t._v("音视频处理 API(audio,video)")]),t._v(" "),a("li",[t._v("canvas / webGL")]),t._v(" "),a("li",[t._v("拖拽释放(Drag and drop) API")]),t._v(" "),a("li",[t._v("history API")]),t._v(" "),a("li",[t._v("requestAnimationFrame")]),t._v(" "),a("li",[t._v("地理位置(Geolocation)API")]),t._v(" "),a("li",[t._v("webSocket")]),t._v(" "),a("li",[t._v("web 存储 localStorage、SessionStorage")]),t._v(" "),a("li",[t._v("表单控件，calendar、date、time、email、url、search")])]),t._v(" "),a("h3",{attrs:{id:"css-选择器及优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器及优先级"}},[t._v("#")]),t._v(" CSS 选择器及优先级")]),t._v(" "),a("p",[a("strong",[t._v("选择器")])]),t._v(" "),a("ul",[a("li",[t._v("id 选择器(#myid)")]),t._v(" "),a("li",[t._v("类选择器(.myclass)")]),t._v(" "),a("li",[t._v('属性选择器(a[rel="external"])')]),t._v(" "),a("li",[t._v("伪类选择器(a:hover, li:nth-child)")]),t._v(" "),a("li",[t._v("标签选择器(div, h1,p)")]),t._v(" "),a("li",[t._v("相邻选择器（h1 + p）")]),t._v(" "),a("li",[t._v("子选择器(ul > li)")]),t._v(" "),a("li",[t._v("后代选择器(li a)")]),t._v(" "),a("li",[t._v("通配符选择器(*)")])]),t._v(" "),a("p",[a("strong",[t._v("优先级：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("!important")])]),t._v(" "),a("li",[t._v("内联样式（1000）")]),t._v(" "),a("li",[t._v("ID 选择器（0100）")]),t._v(" "),a("li",[t._v("类选择器/属性选择器/伪类选择器（0010）")]),t._v(" "),a("li",[t._v("元素选择器/伪元素选择器（0001）")]),t._v(" "),a("li",[t._v("关系选择器/通配符选择器（0000）")])]),t._v(" "),a("p",[t._v("带!important 标记的样式属性优先级最高； 样式表的来源相同时：\n"),a("code",[t._v("!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性")])]),t._v(" "),a("h3",{attrs:{id:"渐进增强与优雅降级的理解及区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强与优雅降级的理解及区别"}},[t._v("#")]),t._v(" 渐进增强与优雅降级的理解及区别")]),t._v(" "),a("p",[a("strong",[t._v("渐进增强（Progressive Enhancement）：")]),t._v("\n一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。")]),t._v(" "),a("p",[a("strong",[t._v("优雅降级（Graceful Degradation）：")]),t._v("\n一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。\n"),a("strong",[t._v("两者区别")]),t._v("\n1、广义：\n其实要定义一个基准线，在此之上的增强叫做渐进增强，在此之下的兼容叫优雅降级\n2、狭义：\n渐进增强一般说的是使用 CSS3 技术，在不影响老浏览器的正常显示与使用情形下来增强体验，而优雅降级则是体现 html 标签的语义，以便在 js/css 的加载失败/被禁用时，也不影响用户的相应功能。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 例子 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".transition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*渐进增强写法*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".transition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*优雅降级写法*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"常见的兼容性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的兼容性问题"}},[t._v("#")]),t._v(" 常见的兼容性问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不同浏览器的标签默认的 margin 和 padding 不一样。*{margin:0;padding:0;}")])]),t._v(" "),a("li",[a("p",[t._v("IE6 双边距 bug：块属性标签 float 后，又有横行的 margin 情况下，在 IE6 显示 margin 比设置的大。hack：display:inline;将其转化为行内属性。")])]),t._v(" "),a("li",[a("p",[t._v("设置较小高度标签（一般小于 10px），在 IE6，IE7 中高度超出自己设置高度。hack：给超出高度的标签设置 overflow:hidden;或者设置行高 line-height 小于你设置的高度。")])]),t._v(" "),a("li",[a("p",[t._v("Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。")])]),t._v(" "),a("li",[a("p",[t._v("超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不再具有 hover 和 active 了。解决方法是改变 CSS 属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}")])])]),t._v(" "),a("h3",{attrs:{id:"css3-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3-新特性"}},[t._v("#")]),t._v(" CSS3 新特性")]),t._v(" "),a("ul",[a("li",[t._v("过渡")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*所有属性从原始值到制定值的一个过渡，运动曲线ease,运动时间0.5秒*/")]),t._v("\ntransition：all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("5s\n")])])]),a("ul",[a("li",[t._v("动画")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*执行一次logo2-line动画，运动时间2秒，运动曲线为 linear*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" logo2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("line 2s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("形状转换")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//transform:适用于2D或3D转换的元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//transform-origin：转换元素的位置（围绕那个点进行转换）。默认(x,y,z)：(50%,50%,0)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("30deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("选择器:nth-of-type()")])]),t._v(" "),a("li",[a("p",[t._v("阴影\n文字阴影: text-shadow: 2px 2px 2px #000;(水平阴影，垂直阴影，模糊距离，阴影颜色) 盒子阴影: box-shadow: 10px 10px 5px #999")])]),t._v(" "),a("li",[a("p",[t._v("边框 border-image: url(border.png);")])]),t._v(" "),a("li",[a("p",[t._v("背景")])]),t._v(" "),a("li",[a("p",[t._v("文字")])]),t._v(" "),a("li",[a("p",[t._v("渐变")])]),t._v(" "),a("li",[a("p",[t._v("Filter（滤镜）")])]),t._v(" "),a("li",[a("p",[t._v("弹性布局、栅格布局、多列布局")])]),t._v(" "),a("li",[a("p",[t._v("媒体查询")])])]),t._v(" "),a("h3",{attrs:{id:"position-属性的值有哪些及其区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-属性的值有哪些及其区别"}},[t._v("#")]),t._v(" position 属性的值有哪些及其区别")]),t._v(" "),a("p",[a("strong",[t._v("固定定位 fixed")]),t._v("： 元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed 定 位使元素的位置与文档流无关，因此不占据空间。 Fixed 定位的元素和其他元素重叠。")]),t._v(" "),a("p",[a("strong",[t._v("相对定位 relative")]),t._v("： 如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直 或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是 否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。")]),t._v(" "),a("p",[a("strong",[t._v("绝对定位 absolute")]),t._v("： 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那 么它的位置相对于。absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。")]),t._v(" "),a("p",[a("strong",[t._v("粘性定位 sticky")]),t._v("： 元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定 位，之后为固定定位。")]),t._v(" "),a("p",[a("strong",[t._v("默认定位 Static")]),t._v("： 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声 明）。 inherit: 规定应该从父元素继承 position 属性的值。")]),t._v(" "),a("h3",{attrs:{id:"box-sizing-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing-属性"}},[t._v("#")]),t._v(" box-sizing 属性")]),t._v(" "),a("p",[t._v("box-sizing 规定两个并排的带边框的框，语法为 box-sizing：content-box/border-box/inherit")]),t._v(" "),a("p",[a("strong",[t._v("content-box")]),t._v("：宽度和高度分别应用到元素的内容框，在宽度和高度之外绘制元素的内边距和边框。【标准盒子模型】")]),t._v(" "),a("p",[a("strong",[t._v("border-box")]),t._v("：为元素设定的宽度和高度决定了元素的边框盒。【IE 盒子模型】")]),t._v(" "),a("p",[a("strong",[t._v("inherit")]),t._v("：继承父元素的 box-sizing 值。")]),t._v(" "),a("h3",{attrs:{id:"css-盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-盒子模型"}},[t._v("#")]),t._v(" CSS 盒子模型")]),t._v(" "),a("p",[t._v("CSS 盒模型本质上是一个盒子，它包括：边距，边框，填充和实际内容。CSS 中的盒子模型包括 IE 盒子模型和标准的 W3C 盒子模型。"),a("br"),t._v("\n在标准的盒子模型中，"),a("code",[t._v("width 指 content 部分的宽度")]),t._v("。"),a("br"),t._v("\n在 IE 盒子模型中，"),a("code",[t._v("width 表示 content+padding+border 这三个部分的宽度")]),t._v("。")]),t._v(" "),a("p",[t._v("故在计算盒子的宽度时存在差异：")]),t._v(" "),a("p",[a("strong",[t._v("标准盒模型：")]),t._v(" 一个块的总宽度 = width+margin(左右)+padding(左右)+border(左右)")]),t._v(" "),a("p",[a("strong",[t._v("怪异盒模型：")]),t._v(" 一个块的总宽度 = width+margin（左右）（既 width 已经包含了 padding 和 border 值）")]),t._v(" "),a("h3",{attrs:{id:"bfc-块级格式上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-块级格式上下文"}},[t._v("#")]),t._v(" BFC（块级格式上下文）")]),t._v(" "),a("p",[a("strong",[t._v("BFC 的概念")])]),t._v(" "),a("p",[a("code",[t._v("BFC")]),t._v(" 是 "),a("code",[t._v("Block Formatting Context")]),t._v("的缩写，即块级格式化上下文。"),a("code",[t._v("BFC")]),t._v("是 CSS 布局的一个概念，是一个独立的渲染区域，规定了内部 box 如何布局， 并且这个区域的子元素不会影响到外面的元素，其中比较重要的布局规则有内部 box 垂直放置，计算 BFC 的高度的时候，浮动元素也参与计算。")]),t._v(" "),a("p",[a("strong",[t._v("BFC 的原理布局规则")])]),t._v(" "),a("ul",[a("li",[t._v("内部的 Box 会在"),a("code",[t._v("垂直方向")]),t._v("，一个接一个地放置")]),t._v(" "),a("li",[t._v("Box"),a("code",[t._v("垂直方向的距离由margin决定")]),t._v("。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")]),t._v(" "),a("li",[t._v("每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反")]),t._v(" "),a("li",[t._v("BFC 的区域"),a("code",[t._v("不会与float box重叠")])]),t._v(" "),a("li",[t._v("BFC 是一个独立容器，容器里面的"),a("code",[t._v("子元素不会影响到外面的元素")])]),t._v(" "),a("li",[t._v("计算 BFC 的高度时，"),a("code",[t._v("浮动元素也参与计算高度")])]),t._v(" "),a("li",[t._v("元素的类型和"),a("code",[t._v("display属性，决定了这个Box的类型")]),t._v("。不同类型的 Box 会参与不同的"),a("code",[t._v("Formatting Context")]),t._v("。")])]),t._v(" "),a("p",[a("strong",[t._v("如何创建 BFC？")])]),t._v(" "),a("ul",[a("li",[t._v("根元素，即 HTML 元素")]),t._v(" "),a("li",[t._v("float 的值不为 none")]),t._v(" "),a("li",[t._v("position 为 absolute 或 fixed")]),t._v(" "),a("li",[t._v("display 的值为 inline-block、table-cell、table-caption")]),t._v(" "),a("li",[t._v("overflow 的值不为 visible")])]),t._v(" "),a("p",[a("strong",[t._v("BFC 的使用场景")])]),t._v(" "),a("ul",[a("li",[t._v("去除边距重叠现象")]),t._v(" "),a("li",[t._v("清除浮动（让父元素的高度包含子浮动元素）")]),t._v(" "),a("li",[t._v("避免某元素被浮动元素覆盖")]),t._v(" "),a("li",[t._v("避免多列布局由于宽度计算四舍五入而自动换行")])]),t._v(" "),a("h3",{attrs:{id:"让一个元素水平垂直居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#让一个元素水平垂直居中"}},[t._v("#")]),t._v(" 让一个元素水平垂直居中")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("水平居中")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于 行内元素 : "),a("code",[t._v("text-align: center")]),t._v(";")])]),t._v(" "),a("li",[a("p",[t._v("对于确定宽度的块级元素：")]),t._v(" "),a("p",[t._v("（1）width 和 margin 实现。"),a("code",[t._v("margin: 0 auto")]),t._v(";")]),t._v(" "),a("p",[t._v("（2）绝对定位和 margin-left: margin-left: (父 width - 子 width）/2, 前提是父元素 position: relative")])]),t._v(" "),a("li",[a("p",[t._v("对于宽度未知的块级元素")]),t._v(" "),a("p",[t._v("（1）"),a("code",[t._v("table标签配合margin左右auto实现水平居中")]),t._v("。使用 table 标签（或直接将块级元素设值为 display:table），再通过给该标签添加左右 margin 为 auto。")]),t._v(" "),a("p",[t._v("（2）inline-block 实现水平居中方法。display：inline-block 和 text-align:center 实现水平居中。")]),t._v(" "),a("p",[t._v("（3）"),a("code",[t._v("绝对定位+transform")]),t._v("，translateX 可以移动本身元素的 50%。")]),t._v(" "),a("p",[t._v("（4）flex 布局使用"),a("code",[t._v("justify-content:center")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("垂直居中")])]),t._v(" "),a("ol",[a("li",[t._v("利用 "),a("code",[t._v("line-height")]),t._v(" 实现居中，这种方法适合纯文字类")]),t._v(" "),a("li",[t._v("通过设置父容器 相对定位 ，子级设置 "),a("code",[t._v("绝对定位")]),t._v("，标签通过 margin 实现自适应居中")]),t._v(" "),a("li",[t._v("弹性布局 flex :父级设置 display: flex; 子级设置 margin 为 auto 实现自适应居中")]),t._v(" "),a("li",[t._v("父级设置相对定位，子级设置绝对定位，并且通过位移 transform 实现")]),t._v(" "),a("li",[a("code",[t._v("table 布局")]),t._v("，父级通过转换成表格形式，"),a("code",[t._v("然后子级设置 vertical-align 实现")]),t._v("。（需要注意的是：vertical-align: middle 使用的前提条件是内联元素以及 display 值为 table-cell 的元素）。")])])])]),t._v(" "),a("p",[t._v("传送门 ☞ "),a("a",{attrs:{href:"https://juejin.cn/post/7008348524530106381",target:"_blank",rel:"noopener noreferrer"}},[t._v("# 图解 CSS 水平垂直居中常见面试方法"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"隐藏页面中某个元素的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏页面中某个元素的方法"}},[t._v("#")]),t._v(" 隐藏页面中某个元素的方法")]),t._v(" "),a("p",[t._v("1."),a("code",[t._v("opacity：0")]),t._v("，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定 一些事件，如 click 事件，那么点击该区域，也能触发点击事件的")]),t._v(" "),a("p",[t._v("2."),a("code",[t._v("visibility：hidden")]),t._v("，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已 经绑定的事件 ，隐藏对应元素，在文档布局中仍保留原来的空间（重绘）")]),t._v(" "),a("p",[t._v("3."),a("code",[t._v("display：none")]),t._v("，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素。 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）")]),t._v(" "),a("blockquote",[a("p",[t._v("该问题会引出 回流和重绘")])]),t._v(" "),a("h3",{attrs:{id:"用-css-实现三角符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-css-实现三角符号"}},[t._v("#")]),t._v(" 用 CSS 实现三角符号")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*记忆口诀：盒子宽高均为零，三面边框皆透明。 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px solid #ff0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"页面布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面布局"}},[t._v("#")]),t._v(" 页面布局")]),t._v(" "),a("h4",{attrs:{id:"_1-flex-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-flex-布局"}},[t._v("#")]),t._v(" 1.Flex 布局")]),t._v(" "),a("p",[t._v("布局的传统解决方案，基于盒状模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。")]),t._v(" "),a("p",[t._v('Flex 是 Flexible Box 的缩写，意为"弹性布局",用来为盒状模型提供最大的灵活性。指定容器 display: flex 即可。 简单的分为容器属性和元素属性。')]),t._v(" "),a("p",[t._v("容器的属性：")]),t._v(" "),a("ul",[a("li",[t._v("flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;")]),t._v(" "),a("li",[t._v("flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;")]),t._v(" "),a("li",[t._v("flex-flow： .box { flex-flow: || ; }")]),t._v(" "),a("li",[t._v("justify-content：对其方式，水平主轴对齐方式")]),t._v(" "),a("li",[t._v("align-items：对齐方式，竖直轴线方向")]),t._v(" "),a("li",[t._v("align-content")])]),t._v(" "),a("p",[t._v("项目的属性（元素的属性）：")]),t._v(" "),a("ul",[a("li",[t._v("order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0")]),t._v(" "),a("li",[t._v("flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大")]),t._v(" "),a("li",[t._v("flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果 定义个 item 的 flow-shrink 为 0，则为不缩小")]),t._v(" "),a("li",[t._v("flex-basis 属性：定义了在分配多余的空间，项目占据的空间。")]),t._v(" "),a("li",[t._v("flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto。")]),t._v(" "),a("li",[t._v("align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖")]),t._v(" "),a("li",[t._v("align-items，默认属 性为 auto，表示继承父元素的 align-items 比如说，用 flex 实现圣杯布局")])]),t._v(" "),a("h4",{attrs:{id:"_2-rem-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rem-布局"}},[t._v("#")]),t._v(" 2.Rem 布局")]),t._v(" "),a("p",[t._v("首先 Rem 相对于根(html)的 font-size 大小来计算。简单的说它就是一个相对单例 如:font-size:10px;,那么（1rem = 10px）了解计算原理后首先解决怎么在不同设备上设置 html 的 font-size 大小。其实 rem 布局的本质是等比缩放，一般是基于宽度。")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("：可以快速适用移动端布局，字体，图片高度")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),a("p",[t._v("① 目前 ie 不支持，对 pc 页面来讲使用次数不多；"),a("br"),t._v("\n② 数据量大：所有的图片，盒子都需要我们去给一个准确的值；才能保证不同机型的适配；"),a("br"),t._v("\n③ 在响应式布局中，必须通过 js 来动态控制根元素 font-size 的大小。也就是说 css 样式和 js 代码有一定的耦合性。且必须将改变 font-size 的代码放在 css 样式之前。")]),t._v(" "),a("h4",{attrs:{id:"_3-百分比布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-百分比布局"}},[t._v("#")]),t._v(" 3.百分比布局")]),t._v(" "),a("p",[t._v('通过百分比单位 " % " 来实现响应式的效果。通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。 直观的理解，我们可能会认为子元素的百分比完全相对于直接父元素，height 百分比相 对于 height，width 百分比相对于 width。 padding、border、margin 等等不论是垂直方向还是水平方向，都相对于直接父元素的 width。 除了 border-radius 外，还有比如 translate、background-size 等都是相对于自身的。')]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),a("p",[t._v("（1）计算困难"),a("br"),t._v("\n（2）各个属性中如果使用百分比，相对父元素的属性并不是唯一的。造成我们使用百分比单位容易使布局问题变得复杂。")]),t._v(" "),a("h4",{attrs:{id:"_4-浮动布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-浮动布局"}},[t._v("#")]),t._v(" 4.浮动布局")]),t._v(" "),a("p",[t._v("浮动布局:当元素浮动以后可以向左或向右移动，直到它的外边缘碰到包含它的框或者另外一个浮动元素的边框为止。元素浮动以后会脱离正常的文档流，所以文档的普通流中的框就变的好像浮动元素不存在一样。")]),t._v(" "),a("p",[a("strong",[t._v("优点")])]),t._v(" "),a("p",[t._v("这样做的优点就是在图文混排的时候可以很好的使文字环绕在图片周围。另外当元素浮动了起来之后，它有着块级元素的一些性质例如可以设置宽高等，但它与 inline-block 还是有一些区别的，第一个就是关于横向排序的时候，float 可以设置方向而 inline-block 方向是固定的；还有一个就是 inline-block 在使用时有时会有空白间隙的问题")]),t._v(" "),a("p",[a("strong",[t._v("缺点")])]),t._v(" "),a("p",[t._v("最明显的缺点就是浮动元素一旦脱离了文档流，就无法撑起父元素，"),a("code",[t._v("会造成父级元素高度塌陷")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"如何使用-rem-或-viewport-进行移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-rem-或-viewport-进行移动端适配"}},[t._v("#")]),t._v(" 如何使用 rem 或 viewport 进行移动端适配")]),t._v(" "),a("p",[a("strong",[t._v("rem 适配原理：")])]),t._v(" "),a("p",[t._v("改变了一个元素在不同设备上占据的 css 像素的个数")]),t._v(" "),a("p",[t._v("rem 适配的优缺点")]),t._v(" "),a("ul",[a("li",[t._v("优点：没有破坏完美视口")]),t._v(" "),a("li",[t._v("缺点：px 值转换 rem 太过于复杂(下面我们使用 less 来解决这个问题)")])]),t._v(" "),a("p",[a("strong",[t._v("viewport 适配的原理")])]),t._v(" "),a("p",[t._v("viewport 适配方案中，每一个元素在不同设备上占据的 css 像素的个数是一样的。但是 css 像素和物理像素的比例是不一样的，等比的")]),t._v(" "),a("p",[t._v("viewport 适配的优缺点")]),t._v(" "),a("ul",[a("li",[t._v("在我们设计图上所量取的大小即为我们可以设置的像素大小，即所量即所设")]),t._v(" "),a("li",[t._v("缺点破坏完美视口")])]),t._v(" "),a("h3",{attrs:{id:"清除浮动的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的方式"}},[t._v("#")]),t._v(" 清除浮动的方式")]),t._v(" "),a("ul",[a("li",[t._v("添加额外标签")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  //添加额外标签并且添加clear属性\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("both")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  //也可以加一个br标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("父级添加 overflow 属性，或者设置高度")]),t._v(" "),a("li",[t._v("建立伪类选择器清除浮动")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在css中添加:after伪元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置添加子元素的内容是空 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置添加子元素为块级元素 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置添加的子元素的高度0 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置添加子元素看不见 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置clear：both */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"css-预处理器-sass、less、stylus-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-预处理器-sass、less、stylus-的区别"}},[t._v("#")]),t._v(" CSS 预处理器 Sass、Less、Stylus 的区别")]),t._v(" "),a("p",[t._v("什么事 CSS 预处理器?")]),t._v(" "),a("p",[t._v("CSS 预处理器是一种语言用来为 CSS 增加一些变成的特性，无需考虑浏览器兼容问题，例如你可以在 CSS 中使用变量，简单的程序逻辑、函数等在编程语言中的一些基本技巧，可以让 CSS 更加简洁，适应性更强，代码更直观等诸多好处\n基本语法区别")]),t._v(" "),a("p",[t._v("Sass 是以.sass 为扩展名，Less 是以.less 为扩展名，Stylus 是以.styl 为扩展名\n变量的区别")]),t._v(" "),a("p",[t._v("Sass 变量必须是以"),a("code",[t._v("$")]),t._v("开头的，然后变量和值之间使用冒号（：）隔开，和 css 属性是一样的。\nLess 变量是以"),a("code",[t._v("@")]),t._v("开头的，其余 sass 都是一样的。\nStylus 对变量是没有任何设定的，可以是以$开头或者任意字符，而且变量之间可以冒号，空格隔开，但是在 stylus 中不能用@开头\n三种预处理器都有：嵌套、运算符、颜色函数、导入、继承、混入。Stylus 还有一些高级特性。例如循环、判断等")])])}),[],!1,null,null,null);s.default=e.exports}}]);