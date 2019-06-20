import React from 'react'
import moment from 'moment'
import useData from '../../../hooks/useData'

export default function Home() {
    const [posts, loading, error] = useData({
        resource: 'posts',
    })
    const playArray = [
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
    ]
    return (
        <div>
            {playArray.map(post => {
                return (
                    <div className="card my-3 bg-primary mx-5">
                        <div className="card-header">
                            <span class="badge  badge-primary m-1">python</span>
                            <span class="badge  badge-primary m-1">
                                javascript
                            </span>
                            <span class="badge  badge-primary m-1">react</span>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">
                                Blog Post Title{' '}
                                <small className="text-muted">
                                    {moment().format('MMMM Do YYYY')}
                                </small>
                            </h5>
                            <p class="card-text">
                                This post is about some pretty cool stuff.
                                Honestly, I really like that sort of stuff.
                            </p>
                            <a href="#" class="btn btn-success">
                                Read it
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
