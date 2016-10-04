import React, { Component } from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      posts:"all posts"
    }
  }
  componentWillMount(){
    console.log("hello will mount");
    //再次触发Ajax请求
    //请求服务器端的Json数据
  }
  render () {
  return(
    <div>
      {this.state.posts}
    </div>
  )
  }
}

export default App;
