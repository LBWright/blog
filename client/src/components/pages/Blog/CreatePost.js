import React, { useState } from 'react'
import axios from 'axios'

const CreatePost = props => {
    const [title, setTitle] = useState('')
    const [categories, setCategories] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const post = {
            title,
            categories,
            content,
        }
        console.log({ post })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title-input">Title</label>
                    <input
                        id="title-input"
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        required
                        onChange={({ target: { value } }) => setTitle(value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category-input">Categories</label>
                    <input
                        id="category-input"
                        type="text"
                        className="form-control"
                        placeholder="CSV"
                        required
                        onChange={({ target: { value } }) =>
                            setCategories(value)
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body-input">Body</label>
                    <textarea
                        id="body-input"
                        type="text"
                        className="form-control"
                        placeholder="Write your heart out..."
                        rows="30"
                        required
                        onChange={({ target: { value } }) => setContent(value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost

// ```
// def pyfunc(num1, num2):
//     return num1+num2
// ```

// ## This should be a heading

// > This should be a block quote

// I think that's about it
