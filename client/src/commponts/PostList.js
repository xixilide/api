import React, { PropTypes } from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class PostList extends React.Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  componentWillMount() {
    // console.log('hello will mount');
    axios.get('http://localhost:3000/posts').then(res => {
      // console.log("axios");
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
       backgroundColor: '#CFD8DC',
       borderRadius: '5px',
       padding: '16px',
       boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
     },
     title: {
       fontSize: '1.2em'
     },
     button: {
        display: 'block',
        margin: '30px auto',
        width: '120px',
        height: '36px',
        lineHeight: '36px',
        textAlign: 'center',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '20px'
  },
  link:{
    position:'absolute',
        right:'16px',
       top:'20px'
  }
    }
    let postList = this.state.posts.map((post) => {
      return (
       <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
            <Link to={`/post/${post._id}`} style={styles.link}>查看</Link>
        </div>
            )
    },this.state.posts);
  return(
      <div>
        <Link to="/write" style={styles.button}>写文章</Link>
          { postList }
        </div>
  )
  }
}

export default PostList;
