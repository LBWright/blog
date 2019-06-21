import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostPage from './pages/Blog/PostPage'

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts/:id" component={PostPage} />
        </Switch>
    )
}
