import React from 'react'
import { Link } from 'react-router-dom'
import Router from './Router'
import Navbar from './layout/Navbar'

export default function App() {
    return (
        <div className="container my-3">
            <h3 className="my-3 text-primary">
                <Link to="/">Logan Wright</Link>
                <small className="text-muted"> Python and JavaScript</small>
            </h3>
            <p>a blog about the stuff I like</p>
            <Router />
        </div>
    )
}
