import React, { PropTypes } from 'react'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      posts: "all posts"
    };
  }
  componentWillMount() {
    console.log('hello will mount');
    axios.get('http://localhost:8080/posts',function(res){
      this.setState({
        posts:res.posts
      })
    })
    // 再此触发 Ajax 请求，
    // 请求服务器端的 json 数据
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
