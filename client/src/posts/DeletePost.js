import React, { PropTypes } from 'react'
import Radium from 'radium';
class DeletePost extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        show: false
      }
    }

    handleClose() {
      this.setState({show: false})
    }

    handleOpen() {
      this.setState({show: true})
    }

  render () {
    let styles = {
      root: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,.6)',
        display: this.state.show === true ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '999'
      },
      dialog: {
        width: '100%',
        maxWidth: '350px',
        height: '100px',
        padding: '16px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        position: 'relative',
        color: '#f44336'
      },
      actions: {
        position: 'absolute',
        bottom: '16px',
        right: '16px'
      },
      action: {
        display: 'inline-block',
        paddingLeft: '10px',
        paddingRight: '10px',
        color: '#00bcd4',
        fontSize: '.9em',
        ':hover': {
          cursor: 'pointer'
        }
    }
  }
    return (
      <div style={styles.root}>
          <div style={styles.dialog}>
            <p>确定删除吗？</p>
            <div style={styles.actions}>
              <div style={styles.action}  key='0'>确定</div>
              <div onClick={this.handleClose.bind(this)} style={styles.action} key='1'>取消</div>
            </div>
          </div>
        </div>
  );
  }
}
export default Radium(DeletePost);
