import React, { Component } from 'react'

class RegularComponents extends Component {
    render() {
        console.log("Regular Component Render");

        return (
            <>
                <h1>Regular Components {this.props.name}</h1>
            </>
        )
    }
}

export default RegularComponents
