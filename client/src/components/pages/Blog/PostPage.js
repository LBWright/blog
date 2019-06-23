import React from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import useData from '../../../hooks/useData'
import Categories from '../../layout/Categories'

export default function PostPage({ match: { id } }) {
    const [post, loading, error] = useData({ id, resource: 'posts' })
    const input = '## Load the markdown document\n\nThen write a paragraph'
    return (
        <div className="mx-5">
            <h1 className="mt-5">
                This is the Title{' '}
                <small className="text-muted">
                    {moment(Date.now()).format('MMMM Do YYYY')}
                </small>
            </h1>
            <Categories categories={['javascript', 'devlife', 'python']} />
            <hr />
            <div className="mb-5" />
            <ReactMarkdown source={input} />
        </div>
    )
}
