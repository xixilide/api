import React, { PropTypes } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import DeletePost from '../posts/DeletePost';
import Settings from '../settings';
import filter from 'lodash/fp/filter';

class PostList extends React.Component {
  constructor() {
    super();
    this.state={
      posts: [],
      id:''
    };
  }
  componentWillMount() {

    axios.get(`${Settings.host}/posts`).then(res => {
      // console.log("axios");
      this.setState({
        posts:res.data.posts

      })
    })
    // 再次触发 Ajax 请求，
    // 请求服务器端的 json 数据
  }
  //执行删除操作
  handleClick(value) {
  this.setState({id: value});
  this.refs.dialog.handleOpen();

  axios.delete(`${Settings.host}/posts/${this.props.id}`).then(res => {
    this.props.removePosts(this.props.id);
    this.setState({show: false});
    console.log(res.data.message)
  })

}
filterPosts(id) {
  const posts = filter((post) => {
    return post._id !== id
  }, this.state.posts);

  this.setState({ posts: posts })
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
    marginRight:'10px',


  },


    }
    let postList = this.state.posts.map((post) => {
      return (
       <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
            <Link to={`/post/${post._id}`} style={styles.link}>查看</Link>
            <Link to={`/posts/${post._id}/edit`} style={styles.link}>编辑</Link>
            <Link to='javascript:;' style={styles.link} onClick={this.handleClick.bind(this, post._id)}>删除</Link>
      </div>
            )
    },this.state.posts);
  return(
      <div>
        <Link to="/write" style={styles.button}>写文章</Link>
          { postList }
          <DeletePost ref='dialog'　id={this.state.id} removePosts={this.filterPosts.bind(this)} />
        </div>
  )
  }
}

export default PostList;
