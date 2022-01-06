import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
    render() {
        console.log("Pure Component Render");

        return (
            <>
                <h1>Pure Components {this.props.name}</h1>
            </>
        )
    }
}

export default PureComponents
