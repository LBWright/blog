import React, { Fragment } from 'react'

const categoryMap = {
    python: 'success',
    javascript: 'warning text-dark',
    react: 'info',
    attitude: 'secondary',
}

export default function Categories({ categories }) {
    return (
        <>
            {categories.map(category => {
                return (
                    <Fragment key={category}>
                        <span
                            className={`badge badge-${
                                categoryMap[category]
                            } m-1`}
                        >
                            {category}
                        </span>
                    </Fragment>
                )
            })}
        </>
    )
}
