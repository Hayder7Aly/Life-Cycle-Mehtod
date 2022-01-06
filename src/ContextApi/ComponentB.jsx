import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {
    static contextType = UserContext
    render() {
        return (
            <>
                Component E Context {this.context}
                <ComponentC />
            </>
        )
    }
}

// ComponentB.contextType = UserContext
export default ComponentB
