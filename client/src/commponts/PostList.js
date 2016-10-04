import React, { PropTypes } from 'react';
import axios from 'axios';

class PostList extends React.Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  componentWillMount() {
    console.log('hello will mount');
    axios.get('http://localhost:3000/posts').then(res => {
      console.log("axios");
      this.setState({
        posts:res.data.posts

      })
    })
    // 再此触发 Ajax 请求，
    // 请求服务器端的 json 数据
  }
  render () {
    let styles={
      content: {
       position: 'relative',
       width: '100%',
       height: '60px',
       maxWidth: '600px',
       margin: '20px auto',
       backgroundColor: '#fff',
       borderRadius: '5px',
       padding: '16px',
       boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     title: {
       fontSize: '1.2em'
     }
    }
    let postList = this.state.posts.map((post) => {
      return (
       <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
        </div>
            )
    });
  return(
      <div>
          { postList }
        </div>
  )
  }
}

export default PostList;
