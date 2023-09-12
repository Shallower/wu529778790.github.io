(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{664:function(t,a,e){"use strict";e.r(a);var s=e(17),d=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",{attrs:{"data-nodeid":"1053"}},[t._v("上回说到 Webpack 的 Loader 机制，今天我要跟你分享 Webpack 的另外一个重要的核心特性：插件机制。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1054"}},[t._v("Webpack 插件机制的目的是为了增强 Webpack 在项目自动化构建方面的能力。通过上一讲的介绍你应该知道，Loader 就是负责完成项目中各种各样资源模块的加载，从而实现整体项目的模块化，而 Plugin 则是用来解决项目中除了资源模块打包以外的其他自动化工作，所以说 Plugin 的能力范围更广，用途自然也就更多。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1055"}},[t._v("我在这里先介绍几个插件最常见的应用场景：")]),t._v(" "),e("ul",{attrs:{"data-nodeid":"1056"}},[e("li",{attrs:{"data-nodeid":"1057"}},[e("p",{attrs:{"data-nodeid":"1058"}},[t._v("实现自动在打包之前清除 dist 目录（上次的打包结果）；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1059"}},[e("p",{attrs:{"data-nodeid":"1060"}},[t._v("自动生成应用所需要的 HTML 文件；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1061"}},[e("p",{attrs:{"data-nodeid":"1062"}},[t._v("根据不同环境为代码注入类似 API 地址这种可能变化的部分；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1063"}},[e("p",{attrs:{"data-nodeid":"1064"}},[t._v("拷贝不需要参与打包的资源文件到输出目录；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1065"}},[e("p",{attrs:{"data-nodeid":"1066"}},[t._v("压缩 Webpack 打包完成后输出的文件；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1067"}},[e("p",{attrs:{"data-nodeid":"1068"}},[t._v("自动发布打包结果到服务器实现自动部署。")])])]),t._v(" "),e("p",{attrs:{"data-nodeid":"1069"}},[t._v("总之，有了 Plugin 的 Webpack 几乎“无所不能”。借助插件，我们就可以轻松实现前端工程化中绝大多数经常用到的功能，这也正是很多初学者会认为 “Webpack 就是前端工程化，或者前端工程化就是 Webpack” 的原因。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1070"}},[t._v("那接下来我们通过一些常用插件的使用，具体聊聊 Webpack 的插件机制，最后再通过开发一个自己的插件，去理解插件的工作原理。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1073"}},[t._v("通过之前的尝试，你可能已经发现，Webpack 每次打包的结果都是直接覆盖到 dist 目录。而在打包之前，dist 目录中就可能已经存入了一些在上一次打包操作时遗留的文件，当我们再次打包时，只能覆盖掉同名文件，而那些已经移除的资源文件就会一直累积在里面，最终导致部署上线时出现多余文件，这显然非常不合理。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1074"}},[t._v("更为合理的做法就是在每次完整打包之前，自动清理 dist 目录，这样每次打包过后，dist 目录中就只会存在那些必要的文件。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" clean-webpack-plugin --save-dev\n")])])]),e("p",{attrs:{"data-nodeid":"1077"}},[t._v("安装过后，我们回到 Webpack 的配置文件中，然后导入 clean-webpack-plugin 插件，这个插件模块导出了一个叫作 CleanWebpackPlugin 的成员，我们先把它解构出来，具体代码如下。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CleanWebpackPlugin "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean-webpack-plugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",{attrs:{"data-nodeid":"1079"}},[t._v("回到配置对象中，添加一个 plugins 属性，这个属性就是专门用来配置插件的地方，它是一个数组，添加一个插件就是在这个数组中添加一个元素。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1080"}},[t._v("绝大多数插件模块导出的都是一个类型，我们这里的 CleanWebpackPlugin 也不例外，使用它，就是通过这个类型创建一个实例，放入 plugins 数组中，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109171743.png",alt:"20211109171743"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1082"}},[t._v("完成以后我们来测试一下 clean-webpack-plugin 插件的效果。回到命令行终端，再次运行 Webpack 打包，此时之前的打包结果就不会存在了，dist 目录中存放的就都是我们本次打包的结果。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1083"}},[t._v("在这里，我只是希望通过这个非常简单的插件带你体验一下 Webpack 插件的使用。一般来说，当我们有了某个自动化的需求过后，可以先去找到一个合适的插件，然后安装这个插件，最后将它配置到 Webpack 配置对象的 plugins 数组中，这个过程唯一有可能不一样的地方就是，有的插件可能需要有一些配置参数。")]),t._v(" "),e("h4",{attrs:{"data-nodeid":"1084"}},[t._v("用于生成 HTML 的插件")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1085"}},[t._v("除了自动清理 dist 目录，我们还有一个非常常见的需求，就是自动生成使用打包结果的 HTML，所谓使用打包结果指的是在 HTML 中自动注入 Webpack 打包生成的 bundle。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1086"}},[t._v("在使用接下来这个插件之前，我们的 HTML 文件一般都是通过硬编码的方式，单独存放在项目根目录下的，这种方式有两个问题："),e("br"),t._v("\n项目发布时，我们需要同时发布根目录下的 HTML 文件和 dist 目录中所有的打包结果，非常麻烦，而且上线过后还要确保 HTML 代码中的资源文件路径是正确的。"),e("br"),t._v("\n如果打包结果输出的目录或者文件名称发生变化，那 HTML 代码中所对应的 script 标签也需要我们手动修改路径。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1087"}},[t._v("解决这两个问题最好的办法就是让 Webpack 在打包的同时，自动生成对应的 HTML 文件，让 HTML 文件也参与到整个项目的构建过程。这样的话，在构建过程中，Webpack 就可以自动将打包的 bundle 文件引入到页面中。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1088"}},[t._v("相比于之前写死 HTML 文件的方式，自动生成 HTML 的优势在于：")]),t._v(" "),e("ul",{attrs:{"data-nodeid":"1089"}},[e("li",{attrs:{"data-nodeid":"1090"}},[e("p",{attrs:{"data-nodeid":"1091"}},[t._v("HTML 也输出到 dist 目录中了，上线时我们只需要把 dist 目录发布出去就可以了；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1092"}},[e("p",{attrs:{"data-nodeid":"1093"}},[t._v("HTML 中的 script 标签是自动引入的，所以可以确保资源文件的路径是正常的。")])])]),t._v(" "),e("p",{attrs:{"data-nodeid":"1094"}},[t._v("具体的实现方式就需要借助于 html-webpack-plugin 插件来实现，这个插件也是一个第三方的 npm 模块，我们这里同样需要单独安装这个模块，具体操作如下：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" html-webpack-plugin --save-dev\n")])])]),e("p",{attrs:{"data-nodeid":"1096"}},[t._v("安装完成过后，回到配置文件，载入这个模块，不同于 clean-webpack-plugin，html-webpack-plugin 插件默认导出的就是插件类型，不需要再解构内部成员，具体如下：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html-webpack-plugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",{attrs:{"data-nodeid":"1098"}},[t._v("有了这个类型过后，回到配置对象的 plugins 属性中，同样需要添加一下这个类型的实例对象，完成这个插件的使用，具体配置代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172037.png",alt:"20211109172037"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1100"}},[t._v("最后我们回到命令行终端，再次运行打包命令，此时打包过程中就会自动生成一个 index.html 文件到 dist 目录。我们找到这个文件，可以看到文件中的内容就是一段使用了 bundle.js 的空白 HTML，具体结果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172126.png",alt:"20211109172126"}})]),t._v(" "),e("p",[t._v("至此，Webpack 就可以动态生成应用所需的 HTML 文件了，但是这里仍然存在一些需要改进的地方：")]),e("p"),t._v(" "),e("ul",{attrs:{"data-nodeid":"1102"}},[e("li",{attrs:{"data-nodeid":"1103"}},[e("p",{attrs:{"data-nodeid":"1104"}},[t._v("对于生成的 HTML 文件，页面 title 必须要修改；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1105"}},[e("p",{attrs:{"data-nodeid":"1106"}},[t._v("很多时候还需要我们自定义页面的一些 meta 标签和一些基础的 DOM 结构。")])])]),t._v(" "),e("p",{attrs:{"data-nodeid":"1107"}},[t._v("也就是说，还需要我们能够充分自定义这个插件最终输出的 HTML 文件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1108"}},[t._v("如果只是简单的自定义，我们可以通过修改 HtmlWebpackPlugin 的参数来实现。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1109"}},[t._v("我们回到 Webpack 的配置文件中，这里我们给 HtmlWebpackPlugin 构造函数传入一个对象参数，用于指定配置选项。其中，title 属性设置的是 HTML 的标题，我们把它设置为 Webpack Plugin Simple。meta 属性需要以对象的形式设置页面中的元数据标签，这里我们尝试为页面添加一个 viewport 设置，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172207.png",alt:"20211109172207"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1111"}},[t._v("完成以后回到命令行终端，再次打包，然后我们再来看一下生成的 HTML 文件，此时这里的 title 和 meta 标签就会根据配置生成，具体结果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172227.png",alt:"20211109172227"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1113"}},[t._v("如果需要对 HTML 进行大量的自定义，更好的做法是在源代码中添加一个用于生成 HTML 的模板，然后让 html-webpack-plugin 插件根据这个模板去生成页面文件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1114"}},[t._v("我们这里在 src 目录下新建一个 index.html 文件作为 HTML 文件的模板，然后根据我们的需要在这个文件中添加相应的元素。对于模板中动态的内容，可以使用 Lodash 模板语法输出，模板中可以通过 htmlWebpackPlugin.options 访问这个插件的配置数据，例如我们这里输出配置中的 title 属性，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172300.png",alt:"20211109172300"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1116"}},[t._v("有了模板文件过后，回到配置文件中，我们通过 HtmlWebpackPlugin 的 template 属性指定所使用的模板，具体配置如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172328.png",alt:"20211109172328"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1118"}},[t._v("完成以后我们回到命令行终端，运行打包命令，然后再来看一下生成的 HTML 文件，此时 HTML 中就都是根据模板生成的内容了，具体结果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172418.png",alt:"20211109172418"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1120"}},[t._v("至此，你应该了解了如何通过 html-webpack-plugin 自定义输出 HTML 文件内容。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1121"}},[t._v("关于 html-webpack-plugin 插件，除了自定义输出文件的内容，同时输出多个 HTML 文件也是一个非常常见的需求，除非我们的应用是一个单页应用程序，否则一定需要输出多个 HTML 文件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1122"}},[t._v("如果需要同时输出多个 HTML 文件，其实也非常简单，我们回到配置文件中，这里通过 HtmlWebpackPlugin 创建的对象就是用于生成 index.html 的，那我们完全可以再创建一个新的实例对象，用于创建额外的 HTML 文件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1123"}},[t._v("例如，这里我们再来添加一个 HtmlWebpackPlugin 实例用于创建一个 about.html 的页面文件，我们需要通过 filename 指定输出文件名，这个属性的默认值是 index.html，我们把它设置为 about.html，具体配置如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172500.png",alt:"20211109172500"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1125"}},[t._v("完成以后我们再次回到命令行终端，运行打包命令，然后我们展开 dist 目录，此时 dist 目录中就同时生成了 index.html 和 about.html 两个页面文件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1126"}},[t._v("根据这个尝试我们就应该知道，如果需要创建多个页面，就需要在插件列表中加入多个 HtmlWebpackPlugin 的实例对象，让每个对象负责一个页面文件的生成。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1127"}},[t._v("当然了，对于同时输出多个 HTML，一般我们还会配合 Webpack 多入口打包的用法，这样就可以让不同的 HTML 使用不同的打包结果。不过关于多入口打包的用法不在本课时的讨论范畴内，我们后面再进行介绍。")]),t._v(" "),e("h4",{attrs:{"data-nodeid":"1128"}},[t._v("用于复制文件的插件")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1129"}},[t._v("在我们的项目中一般还有一些不需要参与构建的静态文件，那它们最终也需要发布到线上，例如网站的 favicon、robots.txt 等。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1130"}},[t._v("一般我们建议，把这类文件统一放在项目根目录下的 public 或者 static 目录中，我们希望 Webpack 在打包时一并将这个目录下所有的文件复制到输出目录。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1131"}},[t._v("对于这种需求，我们可以使用 copy-webpack-plugin 插件来帮我们实现。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1132"}},[t._v("同理，我们需要先安装一下 copy-webpack-plugin 插件，安装完成过后，回到配置文件中，导入这个插件类型。然后同样在 plugins 属性中添加一个这个类型的实例，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172615.png",alt:"20211109172615"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1134"}},[t._v("这个插件类型的构造函数需要我们传入一个字符串数组，用于指定需要拷贝的文件路径。它可以是一个通配符，也可以是一个目录或者文件的相对路径。我们这里传入的是 public 目录，表示将这个目录下所有文件全部拷贝到输出目录中。当然了，你还可以在这个数组中继续添加其它路径，这样它在工作时可以同时拷贝。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1135"}},[t._v("配置完成以后回到命令行终端，再次运行 Webpack，此时 public 目录下的文件就会同时拷贝到输出目录中。")]),t._v(" "),e("h3",{attrs:{"data-nodeid":"1137"}},[t._v("开发一个插件")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1138"}},[t._v("通过前面的介绍，我们知道相比于 Loader，插件的能力范围更宽，因为 Loader 只是在模块的加载环节工作，而插件的作用范围几乎可以触及 Webpack 工作的每一个环节。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1139"}},[t._v("那么，这种插件机制是如何实现的呢？")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1140"}},[t._v("其实说起来也非常简单，Webpack 的插件机制就是我们在软件开发中最常见的钩子机制。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1141"}},[t._v("钩子机制也特别容易理解，它有点类似于 Web 中的事件。在 Webpack 整个工作过程会有很多环节，为了便于插件的扩展，Webpack 几乎在每一个环节都埋下了一个钩子。这样我们在开发插件的时候，通过往这些不同节点上挂载不同的任务，就可以轻松扩展 Webpack 的能力。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/Ciqah16mU4KAX07hABBXsBqlv1U403.gif",alt:"Ciqah16mU4KAX07hABBXsBqlv1U403"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1143"}},[t._v("具体有哪些预先定义好的钩子，我们可以参考官方文档的 API：")]),t._v(" "),e("ul",{attrs:{"data-nodeid":"1144"}},[e("li",{attrs:{"data-nodeid":"1145"}},[e("p",{attrs:{"data-nodeid":"1146"}},[e("a",{attrs:{href:"https://webpack.js.org/api/compiler-hooks/","data-nodeid":"1270"}},[t._v("Compiler Hooks")]),t._v("；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1147"}},[e("p",{attrs:{"data-nodeid":"1148"}},[e("a",{attrs:{href:"https://webpack.js.org/api/compilation-hooks/","data-nodeid":"1274"}},[t._v("Compilation Hooks")]),t._v("；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1149"}},[e("p",{attrs:{"data-nodeid":"1150"}},[e("a",{attrs:{href:"https://webpack.js.org/api/parser/","data-nodeid":"1278"}},[t._v("JavascriptParser Hooks")]),t._v("。")])])]),t._v(" "),e("p",{attrs:{"data-nodeid":"1151"}},[t._v("接下来，我们来开发一个自己的插件，看看具体如何往这些钩子上挂载任务。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1152"}},[t._v("这里我的需求是，希望我们开发的这个插件能够自动清除 Webpack 打包结果中的注释，这样一来，我们的 bundle.js 将更容易阅读，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172814.png",alt:"20211109172814"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1154"}},[t._v("那这里我们同样在项目根目录下添加一个单独的 JS 文件。")]),t._v(" "),e("pre",{staticClass:"lang-js",attrs:{"data-nodeid":"1155"}},[e("code",{attrs:{"data-language":"js"}},[t._v("└─ "),e("span",{staticClass:"hljs-number"},[t._v("04")]),t._v("-webpack-plugins ······················· sample root dir\n    ├── public ······························· "),e("span",{staticClass:"hljs-keyword"},[t._v("static")]),t._v(" dir\n    │   └── favicon.ico ······················ "),e("span",{staticClass:"hljs-keyword"},[t._v("static")]),t._v(" file\n    ├── src ·································· source dir\n    │   └── main.js ·························· entry "),e("span",{staticClass:"hljs-built_in"},[t._v("module")]),t._v("\n    ├── package.json ························· package file\n+   ├── remove-comments-plugin.js ············ my plugin\n    └── webpack.config.js ···················· webpack config file\n")])]),t._v(" "),e("p",{attrs:{"data-nodeid":"1156"}},[t._v("Webpack 要求我们的插件必须是一个函数或者是一个包含 apply 方法的对象，一般我们都会定义一个类型，在这个类型中定义 apply 方法。然后在使用时，再通过这个类型来创建一个实例对象去使用这个插件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1157"}},[t._v("所以我们这里定义一个 RemoveCommentsPlugin 类型，然后在这个类型中定义一个 apply 方法，这个方法会在 Webpack 启动时被调用，它接收一个 compiler 对象参数，这个对象是 Webpack 工作过程中最核心的对象，里面包含了我们此次构建的所有配置信息，我们就是通过这个对象去注册钩子函数，具体代码如下：")]),t._v("\n![20211109172838](https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172838.png)\n"),e("p",{attrs:{"data-nodeid":"1159"}},[t._v("知道这些过后，还需要明确我们这个任务的执行时机，也就是到底应该把这个任务挂载到哪个钩子上。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1160"}},[t._v("我们的需求是删除 bundle.js 中的注释，也就是说只有当 Webpack 需要生成的 bundle.js 文件内容明确过后才可能实施。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109172909.png",alt:"20211109172909"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1162"}},[t._v("那根据 API 文档中的介绍，我们找到一个叫作 emit 的钩子，这个钩子会在 Webpack 即将向输出目录输出文件时执行，非常符合我们的需求。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1163"}},[t._v("我们回到代码中，通过 compiler 对象的 hooks 属性访问到 emit 钩子，再通过 tap 方法注册一个钩子函数，这个方法接收两个参数：")]),t._v(" "),e("ul",{attrs:{"data-nodeid":"1164"}},[e("li",{attrs:{"data-nodeid":"1165"}},[e("p",{attrs:{"data-nodeid":"1166"}},[t._v("第一个是插件的名称，我们这里的插件名称是 RemoveCommentsPlugin；")])]),t._v(" "),e("li",{attrs:{"data-nodeid":"1167"}},[e("p",{attrs:{"data-nodeid":"1168"}},[t._v("第二个是要挂载到这个钩子上的函数；")])])]),t._v(" "),e("p",{attrs:{"data-nodeid":"1169"}},[t._v("根据 API 文档中的提示，这里我们在这个函数中接收一个 compilation 对象参数，这个对象可以理解为此次运行打包的上下文，所有打包过程中产生的结果，都会放到这个对象中。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1170"}},[t._v("我们可以使用这个对象中的 assets 属性获取即将写入输出目录的资源文件信息，它是一个对象，我们这里通过 for in 去遍历这个对象，其中键就是每个文件的名称，我们尝试把它打印出来，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109173008.png",alt:"20211109173008"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1172"}},[t._v("完成以后，我们将这个插件应用到 Webpack 的配置中，然后回到命令行重新打包，此时打包过程就会打印我们输出的文件名称，代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109173032.png",alt:"20211109173032"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1174"}},[t._v("我们再回到代码中，来打印一下每个资源文件的内容，文件内容需要通过遍历的值对象中的 source 方法获取，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109173056.png",alt:"20211109173056"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1176"}},[t._v("回到命令行，再次打包，此时输出的文件内容也可以正常被打印。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1177"}},[t._v("能够拿到文件名和文件内容后，我们回到代码中。这里需要先判断文件名是不是以 .js 结尾，因为 Webpack 打包还有可能输出别的文件，而我们的需求只需要处理 JS 文件。")]),t._v(" "),e("p",{attrs:{"data-nodeid":"1178"}},[t._v("那如果是 JS 文件，我们将文件内容得到，再通过正则替换的方式移除掉代码中的注释，最后覆盖掉 compilation.assets 中对应的对象，在覆盖的对象中，我们同样暴露一个 source 方法用来返回新的内容。另外还需要再暴露一个 size 方法，用来返回内容大小，这是 Webpack 内部要求的格式，具体代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109180348.png",alt:"20211109180348"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1180"}},[t._v("完成以后回到命令行终端，再次打包，打包完成过后，我们再来看一下 bundle.js，此时 bundle.js 中每行开头的注释就都被移除了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/wu529778790/image/blog/20211109180530.png",alt:"20211109180530"}})]),t._v(" "),e("p",{attrs:{"data-nodeid":"1182"}},[t._v("以上就是我们实现一个移除注释插件的过程，通过这个过程我们了解了：插件都是通过往 Webpack 生命周期的钩子中挂载任务函数实现的。")]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"精选评论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),e("h5",{attrs:{id:"前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前"}},[t._v("#")]),t._v(" **前：")]),t._v(" "),e("blockquote",[e("p",[t._v("想请教一个问题。面头条遇到的一个面试题。plugin 能完成 loader 的功能吗？"),e("br"),t._v("根据这两节的学习，loader 是在加载过程中，拿到源文件内容，再进行一些处理，最后转化成 js 代码。plugin 也能够在合适的时机拿到源文件内容，并通过一些操作，最后覆盖源文件。plugin 是 loader 的扩展，完成 loader 无法完成的功能。")]),e("div",[t._v("但仍然无法确定 plugin 是否能完成 loader 的功能，如果可以，是否有必要干掉 loader？")]),e("p")]),t._v(" "),e("h6",{attrs:{id:"讲师回复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),e("blockquote",[e("p",[t._v("    理论上是可行的，比如对 CSS 文件进行处理，Plugin 就可以在 Loader 执行之前先处理 CSS 文件。但是这种方式太麻烦，并不符合 Webpack 的设计")])]),t._v(" "),e("h5",{attrs:{id:"园"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#园"}},[t._v("#")]),t._v(" **园：")]),t._v(" "),e("blockquote",[e("p",[t._v("老师，自定义插件只能通过 module.exports 和 require 这种方式导出和导入吗，用 ES6 的 export 和 import 好像不行，为什么呢？")])]),t._v(" "),e("h6",{attrs:{id:"讲师回复-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[t._v("#")]),t._v(" 讲师回复：")]),t._v(" "),e("blockquote",[e("p",[t._v("    我们所编写的 Webpack 配置实际上是运行在 Node.js 环境下的，目前 Node.js 环境中还不能直接支持 ES Modules")])])])}),[],!1,null,null,null);a.default=d.exports}}]);