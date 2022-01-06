import React from 'react'
import styles from "./appStyles.module.css"

const ListRendering = () => {
    const names = ['bruce' , 'clark', 'diana']
    const nameList = names.map(name => <h2 className={styles.success}>{name}</h2>)
    return (
        <>
            {nameList}
        </>
    )
}

export default ListRendering
