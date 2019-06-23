import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/Blog/PostPage'
import Login from './pages/Login'
import CreatePost from './pages/Blog/CreatePost'

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/create" component={CreatePost} />
            <Route path="/posts/:id" component={PostPage} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}
