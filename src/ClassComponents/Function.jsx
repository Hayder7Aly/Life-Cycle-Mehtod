import React from 'react'

const Components = (props) => {
    return (
        <>
            <h1>Hello function Component {props.name}</h1>
            {props.children}
        </>
    )
}

export default Components
