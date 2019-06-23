import React from 'react'
import { Link } from 'react-router-dom'
import Router from './Router'

export default function App() {
    return (
        <div className="container my-3">
            <div className="row justify-content-between my-3">
                <h3 className="text-primary">
                    <Link to="/">Logan Wright</Link>
                    <small className="text-muted"> Python and JavaScript</small>
                </h3>
                <Link to="/login" className="ml-1 mr-5">
                    login
                </Link>
            </div>
            <p>a blog about the stuff I like</p>
            <Router />
        </div>
    )
}
