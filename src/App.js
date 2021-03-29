import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import Posts from "./components/Posts";
import Post from "./components/Post";
import UsersPosts from "./components/UsersPosts";
import Comments from "./components/Comments";
import PostsComments from "./components/PostsComments";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={'url'}>
                    <NavLink to='/'> home </NavLink>
                    <NavLink to='/users'> users </NavLink>
                    <NavLink to='/posts'> posts </NavLink>
                    <NavLink to='/comments'> comments </NavLink>
                    <hr/>
                </div>
                <div>
                    <Switch>
                        <Route path='/' exact render={() => <p>Create React + Redux application with the next functionality:
                                   <br/>1. Create the page: Users. Show table of all users with button “Posts” that
                                   redirects to the
                                   new page with list of the posts
                                   (Use GET /users API https://jsonplaceholder.typicode.com/users)
                                   <br/>2. Create the page: Posts. Show table of posts by each user with button
                                   “Details” that
                                   redirects to the new page. Add the button “Add new” for creating new post using popup
                                   /
                                   new page.
                                   (Use GET API https://jsonplaceholder.typicode.com/posts?userId=1)
                                   (Use POST API https://jsonplaceholder.typicode.com/posts)
                                   <br/>3. Create the page “Post”. That show full post information with all comments
                                   (Use GET API https://jsonplaceholder.typicode.com/comments?postId=1).
                                   Add 2 buttons: Edit & Delete.
                                   (Use PUT API https://jsonplaceholder.typicode.com/posts/1)
                                   (Use DELETE API https://jsonplaceholder.typicode.com/posts/1 ) </p>}/>
                        <>
                            <Route path={'/users/:id'} exact component={User}/>
                            <Route path={'/users'} exact component={Users}/>
                            <Route path={'/posts/:userId'} exact component={Post}/>
                            <Route path={'/posts'} exact component={Posts}/>
                            <Route path={'/comments'} exact component={Comments}/>
                            <Route path={'/users/posts/:userId'} exact component={UsersPosts}/>
                            <Route path={'/posts/comments/:postId'} exact component={PostsComments}/>

                        </>
                    </Switch>
                </div>
            </Router>
        );
    }


};

