# 前台接收后台数据

### REST 架构

//Post /posts according to REST Api structrue
// 例如把一篇博客当做一个 资源
 POST /post 列出所有博客
 PUT /posts/posts:_id 更新一篇博客
 GET /posts 列出所有博客
 DELETE /posts/posts:_id 删除一篇博客
 REST 架构有两大优势：
 1. 请求的格式符合正常用户思维
 2. 最大程度尊重了 http verb 设计者的原始意图
### axios  就是用来发送请求的

 Promise based HTTP client for the browser and node.js

   axios.post('http://localhost:3000/posts',data)

   axios 传统上我们认为它就是发ajax请求的 类似于 $.axios
        --HTTP client(客户端) 就是用来发HTTP 请求的
        Promise es6 中新加的，实现异步请求
