import React, { PropTypes } from 'react'
import axios from 'axios';
import Form from './form';

class EditPost extends React.Component {
  constructor() {
  super();
  this.state = {
    post: {}
  }
}
  publishPost(content){
    axios.post('http://localhost:3000/posts',{content})
     .then(function(res) {
       console.log(res.data.message);
       this.context.router.push("/");
     }.bind(this))
  }


  render () {
    let styles={
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    }
  return(
    <div style={styles.content}>
          <div style={styles.title}>修改文章</div>
          <Form label='更新文章'  publishPost={this.publishPost.bind(this)} />
        </div>
  )
  }
}
EditPost.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default EditPost;
