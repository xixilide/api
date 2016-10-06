import React, { PropTypes } from 'react';
import axios from 'axios';
import PostList from './PostList';
import { Link } from 'react-router';
export default class App extends React.Component {

  render () {
    let styles={
      header: {
          height: '64px',
          width: '100%',
          backgroundColor: '#00bcd4',
          textAlign: 'center',
          lineHeight: '64px',
        },
        link: {
          fontSize: '1.5em',
          color: '#fff',
          textDecoration: 'none'
        }

    }

  return(
    <div>
        <header style={styles.header}>
          <Link to='/' style={styles.link}>BORN TO CODE</Link>
        </header>
        { this.props.children }
      </div>
  )
  }
}
