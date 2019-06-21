import React from 'react'
import moment from 'moment'
import useData from '../../../hooks/useData'
import Categories from '../../layout/Categories'

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
                    <div className="my-5 mx-5 card">
                        <div className="card-header bg-light">
                            <Categories
                                categories={['python', 'javascript', 'react']}
                            />
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">
                                Blog Post Title{' '}
                                <small className="text-muted">
                                    {moment(Date.now()).format('MMMM Do YYYY')}
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
