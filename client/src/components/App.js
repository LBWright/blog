import React from 'react'
import Router from './Router'
import Navbar from './layout/Navbar'

export default function App() {
    return (
        <div className="container my-3">
            <h3>
                Logan Wright
                <small className="text-muted"> Python and JavaScript</small>
            </h3>
            <p>a blog about the stuff I like</p>
            <Router />
        </div>
    )
}
