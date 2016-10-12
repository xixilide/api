import React, { PropTypes } from 'react';
import axios from 'axios';
import Form from './form';
import Settings from '../settings';
import EditForm from './EditForm';
import isEmpty from 'lodash/fp/isEmpty';

class EditPost extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       post: {}
     }
   }
 componentDidMount(){
   var id = this.props.params.id;
   console.log(id);

   axios.get(`${Settings.host}/post/${id}`)
     .then(res => {
       this.setState({
          post: res.data.post
          // 10s 后得到 this.state.post 不为空
        });
       console.log(res);

     })

}
publishPost(data){
  //REST
  var id = this.props.params.id;
  axios.put(`${Settings.host}/post/${id}`,data).then(res =>{
    console.log(res.data.message);
      this.context.router.push('/');
  })


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
          { !isEmpty(this.state.post) ? <EditForm post={this.state.post} publishPost={this.publishPost.bind(this)} /> : ""}
      </div>
  )
  }
}
EditPost.contextTypes = {
   router: React.PropTypes.object
};

export default EditPost;
