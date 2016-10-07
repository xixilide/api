# sChrome 浏览器中测试 API

### 安装 body-parser
```
npm install --save body-parser
```
    body-parser 是一个由 Expressjs 团队维护的 Express 中间件，它的功能是解析 HTTP 请求中的正文信息，并把这些信息存储到 req.body 对象中，比方说，客户端提交 form 表单

### 使用 body-parser

打开 index.js 文件，首先导入 body-parser 功能模块
```js
var bodyParser = require('body-parser');
```
然后在 mongoose.connect(...) 代码之后，添加一行代码：
```js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // 如果想使用 form
```

 提交，这一行是必要的
解析 HTTP 请求正文的中的 JSON 数据，并存储到 req.body 对象中。

## API连接错误解决
react-- API-- github.api

客户端和服务器端域名相同，同时端口也要相同

http报头-- 设置为  Access control Allow Origin：*

查询报头信息--
```
curl -i http://localhost:8080/posts
```
no Access control Allow Origin (访问权限允许源头)、

### 报错：http://localhost:3000/posts.
     No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
### 原因： gitub 关闭了同源策略，前后台不能用同一个端口号,权限不允许访问

### 解决方法：跨源问题，添加cors。（Cross Origin resource Share 跨域资源共享）

1. filter或者servlet里面(服务器端)添加response.setHeader("Access-Control-Allow-Origin", "*");

2. response.setHeader("Access-Control-Allow-Origin", "*");放到接收客户端api 的地方

3. 如果是servlet的话就放到get或者post方法里面，jsp页面就扔到第一行
    在请求的java方法中加入  
    ServletActionContext.getResponse().setHeader("Access-Control-Allow-Origin", "*");

4. 如果是filter部署就扔到dofilter()

5. 使用插件 cors 

 装包 :npm i --save cors

 使用：  在 sever 的 index.js

```js
          var  cors = require('cors');
          app.use(cors());
```
### 报错： {this.state.posts}未定义
      解决方法：
      post:res.posts 改为

        this.setState({
        posts:res.data.posts

      })

### 报错：this.state.posts.map is not a function
    原因：posts是对象，map对应的是数组的遍历，只能在数组上
解决方法：
      将 post:"" 改为 posts: []  ---初始数据类型改为数组
