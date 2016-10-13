# 前台接收后台数据

### REST 架构

//Post /posts according to REST Api structrue
// 例如把一篇博客当做一个 资源
 POST /post 列出所有博客
 PUT `/posts/posts:_id `更新一篇博客
 GET /posts 列出所有博客
 DELETE `/posts/posts:_id`删除一篇博客
 REST 架构有两大优势：
 1. 请求的格式符合正常用户思维
 2. 最大程度尊重了 http verb 设计者的原始意图
### axios  就是用来发送请求的

 Promise based HTTP client for the browser and node.js

   axios.post('http://localhost:3000/posts',data)

   axios 传统上我们认为它就是发ajax请求的 类似于 $.axios
        --HTTP client(客户端) 就是用来发HTTP 请求的
        Promise es6 中新加的，实现异步请求
### 强制转换类型　－－stringify
JSON.stringify(this.state.post)
### 配置文件

 一些程序各部分公用的信息，或者需要用户自定制修改的信息，一般都会放到配置文件里面。
 ### 给 from 的 input 设置默认值

谷歌一下 ”react form default value"

### 关于　bind()　知识
this.handleClick.bind(this, `post._id`)
//`post._id `不是路由里来的
第二个参数作为参数传给

#### jQuery 事件 - bind() 方法

1. 当点击鼠标时，隐藏或显示 p 元素：
$("button").bind("click",function(){
  $("p").slideToggle();
});
定义和用法
bind() 方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数。
2. 将事件和函数绑定到元素
规定向被选元素添加的一个或多个事件处理程序，以及当事件发生时运行的函数。
语法
```
$(selector).bind(event,data,function)
```

bind( )方法用于将一个处理程序附加到每个匹配元素的事件上并返回jQuery对象。

    .bind(eventType[, evnetData], Handler(eventObject))

    其中，参数eventType是一个字符串，包含一个或多个javaScript事件类型，例如click，submit或自定义事件的名称，指定多个事件类型时用空格分隔各个类型；eventData为Map类型，给出要传递给事件处理程序的数据，handler指定触发该事件时要执行的函数，eventObject表示事件对象。

  - bind()方法将事件处理程序handler附加到匹配元素集合中的每个元素的eventType事件上，如果需要，还可以向事件处理程序传递数据。
  - bind主要是为了改变函数内部的this指向，这个是在ECMA5以后加入的，所以IE8一下的浏览器不支持

  - bind方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入bind方法的第一个参数作为this,传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.

### 装包　ladash
lodash v3.10.1
这是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。
Support
Tested in Chrome 45-46, Firefox 40-41, IE 6-11, MS Edge, Safari 8-9, ChakraNode 0.12.2, Node.js 0.8.28, 0.10.40, 0.12.7, 4.2.2, & 5.0.0, & PhantomJS 1.9.8.

### 导入filter
import filter from 'lodash/fp/filter';
filter 筛选

```js
filterPosts(id) {
  const posts = filter((post) => {
    return post._id !== id
  }, this.state.posts);

  this.setState({ posts: posts })
}
```
