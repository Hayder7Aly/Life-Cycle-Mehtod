import React from 'react'

const Memo = ({name}) => {
    console.log("Rendering Memo Component");
    return (
        <>
            {name}
        </>
    )
}

export default React.memo(Memo)
