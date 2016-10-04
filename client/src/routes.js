import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './commponts/App';
import PostList from './commponts/PostList';
import NewPost from './commponts/NewPost';

export default class Routes extends React.Component {
  render () {
    return(
      <div>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={PostList} />
               <Route path='/write' component={NewPost} />
            </Route>
          </Router>
      </div>
    )

  }
}
