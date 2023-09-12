(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{657:function(t,a,d){"use strict";d.r(a);var e=d(17),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("p",{attrs:{"data-nodeid":"741"}},[t._v("前面讲的性能优化方案，基本都立足于 Hybrid。这一讲我们来聊聊多端场景下的性能优化方案——RN、Flutter 和小程序。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"742"}},[t._v("RN 即 ReactNative，是 Facebook 开发的开源移动应用架构，它可以让开发者基于 Javascript 和 React.js 开发跨平台移动应用。近一年 RN 非常火，其优势之一是多端开发，另一个最大特点就是渲染性能，我曾使用 RN 做了一个个人中心解决方案，首屏性能可以提升 50%。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"743"}},[t._v("Flutter 是一个由 Google 开发的开源移动方案，与 RN 类似，主要为 Android、IOS 系统开发应用。它的技术架构屏蔽了平台的概念，把多端优势在更底层解决掉了，同时渲染性能更好一点。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"744"}},[t._v("除此之外，Flutter 最大的优势在于提升了开发效率。我曾在实际项目中实验过，相对于 iOS 和 Android 两端开发，它可以降低 40% 的开发成本。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"745"}},[t._v("小程序则是一种不需要下载安装即可在微信平台上使用的程序，它主要为开发者在微信平台上提供服务。使用小程序进行优化时，不像 RN 和 Flutter 拥有良好的性能，需要我们额外做一些事情。下面我就一一为你详细介绍下。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"746"}},[t._v("RN 原理及其性能优化")]),t._v(" "),d("p",{attrs:{"data-nodeid":"747"}},[t._v("一般在移动端开发中，我们会使用原生应用或者 H5，但它们都有不能忽视的缺点。如果使用原生开发的话，由于客户端发版和版本审核，迭代周期会比较长；而使用 H5 的话，它的性能体验又比较差，不如原生应用流畅。所以，为了解决这两个问题，RN 就出现了。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"748"}},[t._v("RN 会把应用的 JS 代码（包括依赖的 framework）编译成一个 buddle.js（如 iOS 下 index.ios.bundle.js），它整体框架的目的就是解释运行这个 js 文件。如果是 js 扩展的 API，则通过调用 bridge 方法来调用 native 方法。在这个框架下，上线周期和 Hybrid 类似，")]),t._v(" "),d("p",{attrs:{"data-nodeid":"749"}},[t._v("但因为框架层负责跨平台的渲染，渲染效率比 Hybrid 好得多，前端开发者只需要关心如何编写 JS 代码即可。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"750"}},[t._v("有关 RN 的环境搭建和基础使用，我就不多介绍了，这里重点来聊聊 RN 下的性能优化问题。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"751"}},[t._v("2016 年初我使用 RN 改造个人中心页面，当时遇到了两个难题：")]),t._v(" "),d("ol",{attrs:{"data-nodeid":"752"}},[d("li",{attrs:{"data-nodeid":"753"}},[d("p",{attrs:{"data-nodeid":"754"}},[d("strong",{attrs:{"data-nodeid":"834"}},[t._v("Listview 无限下拉列表初始渲染慢，滚动过程中卡顿体验差的问题；")])])]),t._v(" "),d("li",{attrs:{"data-nodeid":"755"}},[d("p",{attrs:{"data-nodeid":"756"}},[d("strong",{attrs:{"data-nodeid":"838"}},[t._v("用户在拍照时，遇到的卡死的问题，根源是调用拍照控件时出现卡顿。")])])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"757"}},[t._v("第一个是 RN 的老大难问题了，我最初是通过官方提供的 Flatlist 来解决，但由于 Flatlist 追求比较一致的滑动体验，使用空白的 view 组件进行占位，如果你滑动比较快，会来不及渲染就会出现白屏。后来，我做了技术调研后，在 Native 侧封装了一个原生的"),d("strong",{attrs:{"data-nodeid":"844"}},[t._v("ListView")]),t._v("，通过 RN 层来调用解决了这个问题。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"758"}},[t._v("第二个问题，调起照片控件时出现卡顿，后来定位发现，原来是 JS 调用 Native 照片预览时，出现了延迟。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"759"}},[t._v("为什么会这样呢？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"760"}},[t._v("目前的 RN 框架，是基于大量 JSON 消息序列化和反序列化来进行通信的。它的大致逻辑包括以下两段；")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"761"}},[d("li",{attrs:{"data-nodeid":"762"}},[d("p",{attrs:{"data-nodeid":"763"}},[t._v("从 JS 到 Native 通信，即当 JS 调用 RN 控件时，JS 会把它需要调用的 NativeModule 函数和 NativeModule 对应的名称参数用 JSON 序列化后，传递给 Native，Native 接着会提取并调用对应的 NativeModule 的方法；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"764"}},[d("p",{attrs:{"data-nodeid":"765"}},[t._v("从 Native 返回向 JS 通信，Native 先通过 CreateInstance 将数据处理成 JSON，再传递给 JS ，JS 完成调用 JSModule，以实现 Native调用 JS 组件的能力。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"766"}},[t._v("在通讯过程中，如果出现调用延迟，会导致操作后没反应情况的发生。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"767"}},[d("strong",{attrs:{"data-nodeid":"855"}},[t._v("这就需要通过周期性调用类似 ping 的方式来检测是否出现延迟")]),t._v("。具体来说，在调用 ping 指令后对时间进行记录，如果时间超过某个阈值，就认为出现延迟了，阻塞延迟后，需要等待该进程结束，而非持续排队调用。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"768"}},[t._v("解决过程中，还需要注意两点：")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"769"}},[d("li",{attrs:{"data-nodeid":"770"}},[d("p",{attrs:{"data-nodeid":"771"}},[t._v("原有 Hybrid 工程迁移到 RN 过程中，会发现很多新旧功能兼容问题，此时我们可以重新根据 RN 下的体验去设计页面功能，而不是盲目做功能拷贝；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"772"}},[d("p",{attrs:{"data-nodeid":"773"}},[t._v("提前做好 RN 基础建设，打包编译和热更新流程，尽量和 Hybrid 下的基建体系保持统一。")])])]),t._v(" "),d("h3",{attrs:{"data-nodeid":"774"}},[t._v("Flutter 及其性能优化")]),t._v(" "),d("p",{attrs:{"data-nodeid":"775"}},[t._v("当我们使用 RN 开发移动端应用时，会因为要适配 Android 和 iOS 两端，导致代码复杂度特别高的情况。而使用 Flutter 可以避免这一情况。为什么呢？因为 Flutter 自带的渲染引擎和视图，可以帮我们完成组件层的闭环渲染，避免了像 RN 一样还要在组件层和渲染层分别实现。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"776"}},[t._v("请看下方 Flutter 架构实现图。")]),t._v(" "),d("p",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"2038"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/3A/33/CioPOWB-eO6AeAyPAAC8SpzlFUM337.png",alt:"图片1.png","data-nodeid":"2041"}})]),t._v(" "),d("p",{attrs:{"data-nodeid":"778"}},[t._v("Flutter 框架整体上使用 Dart 语言来实现，并且有着清晰的分层架构。这个分层架构除了让我们调用 Flutter 时更便捷之外，还可以分层调用甚至修改每次层的实现。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"779"}},[t._v("架构图中的 Foundation 层，提供了最基础的绘图、界面刷新，触屏等事件；Rendering 层由 Animation、Painting、Gestures 这几个子模块组成，它对外实现了完整的布局绘制功能，"),d("strong",{attrs:{"data-nodeid":"870"}},[t._v("正是这一层让 RN 具备了跨平台渲染能力。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"780"}},[t._v("在它上一层是 Widgets ，它是开发者最常接触的一层，也是实现跨平台能力的一层，主要包括文本、图片、输入框动画等。在 Flutter 中，通过这一层可以组合嵌套不同的控件，可以构建出任意功能，任意复杂度的界面。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"781"}},[t._v("最上面的 Material + Cupertino 层提供了一系列控件（如 Material Design 和 iOS style 的控件），它主要用来保证两个平台（IOS 和 Android）上用户体验的一致性。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"782"}},[t._v("正是通过这一层层架构，Flutter 内部闭环实现了跨平台组件、渲染等流程。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"783"}},[t._v("那么，使用 Flutter ，前端的性能问题一般会出现在哪里呢？我们该如何进行优化？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"784"}},[t._v("用户在使用 Flutter 业务中，遇到的性能问题主要有两大类：")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"785"}},[d("li",{attrs:{"data-nodeid":"786"}},[d("p",{attrs:{"data-nodeid":"787"}},[t._v("用户滑动操作不流畅，因为丢帧导致的卡顿；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"788"}},[d("p",{attrs:{"data-nodeid":"789"}},[t._v("操作流程被中断，陷入等待，也就是页面资源加载时间过长。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"790"}},[t._v("为了解决上述问题，我们选定页面滑动的"),d("strong",{attrs:{"data-nodeid":"883"}},[t._v("流畅度（FPS）和页面加载耗时")]),t._v("，作为性能指标。FPS指标的采集，一般借助 mChoreographer 和 CFRunLoop 来实现。但由于这两种方法都是在主线程上进行的，而 Flutter 的绘制是在 UI TaskRunner 中完成，在 GPU TaskRunner 中渲染，所以以往的 FPS 检测方法并不适用于Flutter。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"791"}},[t._v("Flutter 官方也提供了 Performane Overlay，缺点是无法提供在线监控的性能指标。最后我参考了业界，"),d("strong",{attrs:{"data-nodeid":"889"}},[t._v("采用 handleBeginFrame和 handleDrawFrame 之间的时间间隔来计算帧率")]),t._v("。前者用来启动一个新帧，后者用于帧的绘制。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"792"}},[t._v("具体是怎么做的呢？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"793"}},[t._v("第一步，在使用 App 进行交互操作，开始时计时，1s 内打印下开始时间 startTime，然后在handleBeginTime 方法回调时进行记录，再在 handleDrawFrame 方法回调时进行记录，结束计时打印下 endTime，将 endTime - startTime 存储数组 PerfArr 中。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"794"}},[t._v("第二步，计时达到 1s 后，计算刷新次数 PerfArr.length。PerfArr 中超过 16.6ms 的认为丢帧，如果连续 5 帧超过 50ms 则认为卡顿，单帧超过 250ms 则认为严重卡顿。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"795"}},[t._v("第三步，根据卡顿进行预警即可。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"796"}},[t._v("小程序及其性能治理方案")]),t._v(" "),d("p",{attrs:{"data-nodeid":"797"}},[t._v("我们在开发 Android 和 iOS App 时，H5 会出现白屏和页面切换不流畅的问题，与此同时，我们也希望 App 可以随时更新，而不需要上架审核。随着技术的发展，小程序作为替代方案就出现了。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"798"}},[t._v("小程序分为微信、支付宝、百度、头条系等多种，在这里我以微信小程序为例介绍下。微信小程序是怎么解决的呢？它主要通过设计一套自己的 Web + 离线包方案来实现，这样既能保证跨平台实时更新，还能保证性能体验。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"799"}},[t._v("同时，小程序还能禁掉一些不合适的标签（如外跳 URL 的 A 标签）和 API（如动态执行脚本的API），减少安全问题。此外它还能避免 JS 操作 DOM，从而提升渲染性能。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"800"}},[t._v("以下是小程序的架构设计：")]),t._v(" "),d("p",{attrs:{"data-nodeid":"1664"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/3A/33/CioPOWB-eOSAG59aAAChoXBKxOY460.png",alt:"图片3.png","data-nodeid":"1667"}})]),t._v(" "),d("p",{attrs:{"data-nodeid":"802"}},[t._v("小程序的渲染层使用 WebView 进行渲染，开发者的 JS 逻辑运行在一个独立的 Jscore 线程中。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"803"}},[t._v("渲染层提供了带有数据绑定语法的 WXML，逻辑层提供了setData 等 API，开发者需要更新界面时，通过 setData 把变化的数据传递过去，小程序框架会根据 Dom Diff 的流程把正确的结果更新在 DOM 树上。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"804"}},[t._v("一般小程序的前端性能，我们主要关注"),d("strong",{attrs:{"data-nodeid":"909"}},[t._v("首屏时间")]),t._v("，也就是用户打开小程序到首屏加载完成的时长。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"805"}},[t._v("2016 年我在做微信支付项目时，收到用户反馈，主程序加载慢。当时我先做了首屏时间的采集，通过 setData 结束时间 - 路由开始时间获取到，发现首屏时间一度超过 5s。为了解决这个性能问题，我们开始结合业务场景和架构图进行了定位。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"806"}},[t._v("当时我们的小程序是放在微信支付的九宫格中的，大概有千万级的流量，公司很多业务都想使用这个流量，于是我们在小程序首页就增加了一个入口逻辑，随着业务增加，首页的代码量也越来越大。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"807"}},[t._v("再看小程序的架构图。我们可以知道，小程序启动时，也分为逻辑层的启动和视图层的启动，逻辑层的启动主要是加载 JS 代码，视图层则是启动 WebView 对页面进行加载和渲染。这也增加了时间。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"808"}},[t._v("经过这么一番分析，我们发现问题出在首页包过大上，它导致逻辑层加载过慢，首屏时间超标。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"809"}},[t._v("最后是怎么解决的呢？我的做法是先整理和清理包资源，比如把小 icon 都统一从网络加载的方案，无用资源及时清除；然后采用分包加载的机制减少首屏时间。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"810"}},[t._v("所谓分包加载，就是根据业务场景，将用户访问率高的页面放在主包里，将访问率低的页面放入子包里，按需加载。具体在这个项目中，我在主包只保留核心页面，如核心页面导航位及首页信息流等，其他内容（如积分种树功能、公益活动等）都放入子包中。启动时只加载主包，使用时再按需下载子包。这样主包从 1.2M 降低到 0.5M，首屏时间达到微信小程序下首屏时间标准的即 3s。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"811"}},[t._v("这里面的注意事项就是，要在项目方案设计时，就做好代码和资源目录文件的划分，主要功能所依赖的资源，要放在主包里，子包的拆分不需要太细。如果用户在点击到子包目录时，感觉有卡顿，可以做一些预加载处理。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"812"}},[t._v("小结")]),t._v(" "),d("p",{attrs:{"data-nodeid":"1288"}},[t._v("好了，以上就是 RN、Flutter、小程序等的优化方案。在具体的实施过程中，我们遭遇了不少坑，最大的坑是 RN 方案接入期遇到的。我们在新技术生命周期的“早期采用者”阶段就已经介入了。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"1289"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/3A/2A/Cgp9HWB-eNuAKyT9AAC2PWHXEiY575.png",alt:"图片2.png","data-nodeid":"1293"}})]),t._v(" "),d("p",{attrs:{"data-nodeid":"815"}},[t._v("这个阶段 BAT 都没有大规模使用，出现问题后（如页面报错）需要去向 Facebook 开发同学提issue 去解决，往往解决一个问题就需要 2 周时间，业务往往等不及，严重影响了项目进入生产环境的进度。所以建议你以后在采用新技术方案时，尽量在上图的“早期大众”阶段再进入，这个时期很多常见的坑都蹚过了， Flutter 方案我们就是这么做的。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"816"}},[t._v("下面给你留一个问题：")]),t._v(" "),d("blockquote",{attrs:{"data-nodeid":"817"}},[d("p",{attrs:{"data-nodeid":"818"}},[t._v("你们现在使用的多端方案有哪些性能优化手段呢？")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"819"}},[t._v("好了，欢迎在评论区和我沟通，马上进入下一讲，前端技术专业能力与业务产出平衡。")]),t._v(" "),d("hr"),t._v(" "),d("h3",{attrs:{id:"精选评论"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),d("h5",{attrs:{id:"康"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#康"}},[t._v("#")]),t._v(" **康：")]),t._v(" "),d("blockquote",[d("p",[t._v("这里 Flutter 只提到性能指标的收集，有优化方案吗？")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    Flutter这块儿，优化方案还在做的过程中，主要是卡顿优化，长列表优化和内存优化等")])])])}),[],!1,null,null,null);a.default=r.exports}}]);