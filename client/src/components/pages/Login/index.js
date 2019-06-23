import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = {
        email,
        password,
    }

    const handleSubmit = ({ preventDefault }) => {
        preventDefault()
        console.log('posting to login route', user)
    }

    return (
        <div className="row my-5">
            <div className="col" />
            <div className="col">
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter email"
                            onChange={({ target: { value } }) =>
                                setEmail(value)
                            }
                        />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={({ target: { value } }) =>
                                setPassword(value)
                            }
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            <div className="col" />
        </div>
    )
}

export default Login
