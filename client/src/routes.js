import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './commponts/App';
import PostList from './commponts/PostList';
import NewPost from './posts/NewPost';
import EditPost from './posts/EditPost';
import ShowPost from './posts/ShowPost';

export default class Routes extends React.Component {
  render () {
    return(
      <div>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={PostList} />
               <Route path='/write' component={NewPost} />
                 <Route path='/post/:id' component={ShowPost} />
                 <Route path='/posts/:id/edit' component={EditPost} />
            </Route>
          </Router>
      </div>
    )

  }
}
