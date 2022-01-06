import React from 'react'

const DoubleCounter = ({count, incrementCount}) => {


    return (
        <>
            <h1 onDoubleClick={incrementCount}>Count - {count}</h1>
        </>
    )
}

export default DoubleCounter
