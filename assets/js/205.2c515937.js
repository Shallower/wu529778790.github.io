(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{700:function(n,a,t){"use strict";t.r(a);var e=t(17),s=Object(e.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("ES6 彻底改变了前端的编码风格，可以说对于前端的影响非常巨大。")]),n._v(" "),t("blockquote",[t("p",[n._v("在学习之前，推荐大家使用 babel 官方提供的在线编译工具，编写自己的 demo，会在右侧实时显示出编译之后的代码，以供参考学习 "),t("a",{attrs:{href:"http://babeljs.io/repl/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://babeljs.io/repl/"),t("OutboundLink")],1)])]),n._v(" "),t("h2",{attrs:{id:"新的变量声明方式-let-const"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新的变量声明方式-let-const"}},[n._v("#")]),n._v(" 新的变量声明方式 let/const")]),n._v(" "),t("p",[n._v("与 var 不同，新的变量声明方式带来了一些不一样的特性，其中最重要的两个特性就是提供了块级作用域与不再具备变量提升。")]),n._v(" "),t("p",[n._v("通过 2 个简单的例子来说明这两点。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("{\n    let a = 20;\n}\n\nconsole.log(a);  // a is not defined\n")])])]),t("p",[n._v("而这个简单的例子，会被编译为：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("{\n    let _a = 20;\n}\n\nconsole.log(a);  // a is not defined\n\n\n// ES5\nconsole.log(a);   // undefined\nvar a = 20;\n\n// ES6\nconsole.log(a); // a is not defined\nlet a = 20;\n")])])]),t("p",[n._v("当然，如果你的代码编译成为了 ES5 之后，仍然会存在变量提升，因此这一点只需要我们记住即可。我们在实际使用中，也需要尽量避免使用变量提升的特性带来的负面影响。对于变量提升的滥用，只存在与面试题中。")]),n._v(" "),t("p",[n._v("使用 ES6，我们需要全面使用 let/const 替换 var，那么什么时候用 let，什么时候用 const 就成为了一个大家要熟练区分的一个知识点。")]),n._v(" "),t("h3",{attrs:{id:"我们常常使用-let-来声明一个值会被改变的变量-而使用-const-来声明一个值不会被改变的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我们常常使用-let-来声明一个值会被改变的变量-而使用-const-来声明一个值不会被改变的变量"}},[n._v("#")]),n._v(" 我们常常使用 let 来声明一个值会被改变的变量，而使用 const 来声明一个值不会被改变的变量")]),n._v(" "),t("p",[n._v("当值为基础数据类型时，那么这里的值，就是指值本身。\n而当值对应的为引用数据类型时，那么我这里说的值，则表示指向该对象的引用。这里需要注意，正因为该值为一个引用，重要保证引用不变就可以，我们仍然可以改变该引用所指向的对象。")]),n._v(" "),t("p",[n._v("当我们试图改变 const 声明的变量时，则会报错:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("let a = null;\na = 20;\n\n\nconst obDev = {\n    a: 20,\n    b: 30\n}\n\n\nobDev.a = 30;\n\nconsole.log(obDev); // Object {a: 30, b: 30}\n\n\nconst fn = function() {}\nconst a = obDev.a;\n... ...\n")])])]),t("p",[n._v("只要抓住上面我说的特性，那么在使用 let/const 时就会显得游刃有余。\n根据我自己的经验，使用 const 的场景要比使用 let 的场景多很多。")]),n._v(" "),t("h2",{attrs:{id:"箭头函数的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数的使用"}},[n._v("#")]),n._v(" 箭头函数的使用")]),n._v(" "),t("p",[n._v("之前我说 ES6 颠覆了 js 的编码习惯，箭头函数的使用占了很大一部分。")]),n._v(" "),t("p",[n._v("首先是写法上的不同:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// es5\nvar fn = function(a, b) {\n    return a + b;\n}\n\n// es6 箭头函数写法，当函数直接被return时\nconst fn = (a, b) => a + b;\n\n// es5\nvar foo = function() {\n    var a = 20；\n    var b = 30;\n    return a + b;\n}\n\n// es6\nconst foo = () => {\n   const a = 20;\n   const b = 30;\n   return a + b;\n}\n")])])]),t("blockquote",[t("p",[n._v("箭头函数可以替换函数表达式，但是不能替换函数声明")])]),n._v(" "),t("p",[n._v("其次还有一个至关重要的一点，那就是箭头函数中，没有 this。如果你在箭头函数中使用了 this，那么该 this 一定就是外层的 this。")]),n._v(" "),t("p",[n._v("也正是因为箭头函数中没有 this，因此我们也就无从谈起用 call/apply/bind 来改变 this 指向。记住这个特性，能让你在 react 组件之间传值时少走无数弯路。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("var person = {\n    name: 'tom',\n    getName: function() {\n        return this.name;\n    }\n}\n\n// 我们试图用ES6的写法来重构上面的对象\nconst person = {\n    name: 'tom',\n    getName: () => this.name\n}\n\n// 但是编译结果却是\nvar person = {\n    name: 'tom',\n    getName: function getName() {\n        return undefined.name;\n    }\n};\n")])])]),t("p",[n._v("在 ES6 中，会默认采用严格模式，因此 this 也不会自动指向 window 对象了，而箭头函数本身并没有 this，因此 this 就只能是 undefined，这一点，在使用的时候，一定要慎重慎重再慎重，不然踩了坑你都不知道自己错在哪！这种情况，如果你还想用 this，就不用使用箭头函数的写法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// 可以稍做改动\nconst person = {\n    name: 'tom',\n    getName: function() {\n        return setTimeout(() => this.name, 1000);\n    }\n}\n\n// 编译之后变成\nvar person = {\n    name: 'tom',\n    getName: function getName() {\n        var _this = this;  // 使用了我们在es5时常用的方式保存this引用\n\n        return setTimeout(function () {\n            return _this.name;\n        }, 1000);\n    }\n};\n")])])]),t("p",[n._v("先记住箭头函数的写法，并留意箭头函数中关于 this 的特殊性，更过实践与注意事项我们在封装 react 组件时再慢慢来感受")]),n._v(" "),t("h2",{attrs:{id:"模板字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串"}},[n._v("#")]),n._v(" 模板字符串")]),n._v(" "),t("p",[n._v("模板字符串是为了解决使用+号拼接字符串的不便利而出现的。它的功能非常强大，但是我们大多数时候使用它则非常简单。看一个例子大家就明白怎么使用了。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('// es6\nconst a = 20;\nconst b = 30;\nconst string = `${a}+${b}=${a+b}`;\n\n// es5\nvar a = 20;\nvar b = 30;\nvar string = a + "+" + b + "=" + (a + b);\n')])])]),t("p",[n._v("使用 整个字符串包裹起来，而在其中使用 ${} 来包裹一个变量或者一个表达式。")]),n._v(" "),t("p",[n._v("当然模板字符串还支持换行等强大的功能，更多的大家可通过参考资料进一步学习")]),n._v(" "),t("h2",{attrs:{id:"解析结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析结构"}},[n._v("#")]),n._v(" 解析结构")]),n._v(" "),t("p",[n._v("解析结构是一种全新的写法，我们只需要使用一个例子，大家就能够明白解析结构到底是怎么一回事儿。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// 首先有这么一个对象\nconst props = {\n    className: 'tiger-button',\n    loading: false,\n    clicked: true,\n    disabled: 'disabled'\n}\n")])])]),t("p",[n._v("当我们想要取得其中的 2 个值：loading 与 clicked 时：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// es5\nvar loading = props.loading;\nvar clicked = props.clicked;\n\n// es6\nconst { loading, clicked } = props;\n\n// 给一个默认值，当props对象中找不到loading时，loading就等于该默认值\nconst { loading = false, clicked } = props;\n")])])]),t("p",[n._v("是不是简单了许多？正是由于解析结构大大减少了代码量，因此它大受欢迎，在很多代码中它的影子随处可见。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// 比如\n// section1\nimport React, { Component } from 'react';\n\n// section2\nexport { default } from './Button';\n\n// section3\nconst { click, loading } = this.props;\nconst { isCheck } = this.state;\n\n// more  任何获取对象属性值的场景都可以使用解析结构来减少我们的代码量\n")])])]),t("p",[n._v("另外，数组也有属于自己的解析结构。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// es6\nconst arr = [1, 2, 3];\nconst [a, b, c] = arr;\n\n// es5\nvar arr = [1, 2, 3];\nvar a = arr[0];\nvar b = arr[1];\nvar c = arr[2];\n")])])]),t("p",[n._v("数组以序列号一一对应，这是一个有序的对应关系。\n而对象根据属性名一一对应，这是一个无序的对应关系。\n根据这个特性，使用解析结构从对象中获取属性值更加具有可用性。")]),n._v(" "),t("h2",{attrs:{id:"函数默认参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数默认参数"}},[n._v("#")]),n._v(" 函数默认参数")]),n._v(" "),t("p",[n._v("之前我们不能直接为函数指定默认参数，因此很多时候为了保证传入的参数具备一个默认值，我们常常使用如下的方法：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("function add(x, y) {\n    var x = x || 20;\n    var y = y || 30;\n    return x + y;\n}\n\nconsole.log(add()); // 50\n")])])]),t("p",[n._v("这种方式并不是没有缺点，比如当我传入一个 x 值为 false，这个时候任然会取到默认值，就不是我们的本意了。")]),n._v(" "),t("p",[n._v("来看看 ES6 的默认值写法：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("function add(x = 20, y = 30) {\n    return x + y;\n}\n\nconsole.log(add());\n")])])]),t("p",[n._v("在实际开发中给参数添加适当的默认值，可以让我们堆函数的参数类型有一个直观的认知")]),n._v(" "),t("p",[n._v("const ButtonGroupProps = {\nsize: 'normal',\nclassName: 'xxxx-button-group',\nborderColor: '#333'\n}")]),n._v(" "),t("p",[n._v("export default function ButtonGroup(props = ButtonGroupProps) {\n... ...\n}")]),n._v(" "),t("h2",{attrs:{id:"展开运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#展开运算符"}},[n._v("#")]),n._v(" 展开运算符")]),n._v(" "),t("p",[n._v("在 ES6 中用...来表示展开运算符，它可以将数组方法或者对象进行展开。先来看一个例子它是如何使用的。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 10, 20, 30];\n\n// 这样，arr2 就变成了[1, 2, 3, 10, 20, 30];\n")])])]),t("p",[n._v("当然，展开对象数据也是可以得到类似的结果")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("const obj1 = {\n  a: 1,\n  b: 2,\n  c: 3\n}\n\nconst obj2 = {\n  ...obj1,\n  d: 4,\n  e: 5,\n  f: 6\n}\n\n// 结果类似于 const obj2 = Object.assign({}, obj1, {d: 4})\n")])])]),t("p",[n._v("展开运算符还常常运用在解析结构之中，例如我们在 Raect 封装组件的时候常常不确定 props 到底还有多少数据会传进来，就会利用展开运算符来处理剩余的数据。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// 这种方式在react中十分常用\nconst props = {\n  size: 1,\n  src: 'xxxx',\n  mode: 'si'\n}\n\n\nconst { size, ...others } = props;\n\nconsole.log(others)\n\n// 然后再利用暂开运算符传递给下一个元素，再以后封装react组件时会大量使用到这种方式，正在学习react的同学一定要搞懂这种使用方式\n<button></button>\n")])])]),t("p",[n._v("展开运算符还用在函数的参数中，来表示函数的不定参。只有放在最后才能作为函数的不定参，否则会报错。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("// 所有参数之和\nconst add = (a, b, ...more) => {\n    return more.reduce((m, n) => m + n) + a + b\n}\n\nconsole.log(add(1, 23, 1, 2, 3, 4, 5)) // 39\n")])])]),t("p",[n._v("展开运算符的运用可以大大提高我们的代码效率，但是在刚开始使用的时候比较绕脑，掌握好了用起来还是非常爽的，记住这些使用场景，平时在用的时候可以刻意多运用就行了。")]),n._v(" "),t("p",[n._v("更多信息参考阮一峰老师的入门教程："),t("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://es6.ruanyifeng.com/"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);