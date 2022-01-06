import React, { Component } from 'react'
import UpdateComponent from './HigherOrderComponent2'

class HigherOrderComponent1 extends Component {
    
    
    render() {
        const {count , incrementCount } = this.props
        console.log(this.props.name);
        return (
            <>
                <button onClick={incrementCount}>Click {count} Times</button>
            </>
        )
    }
}

export default UpdateComponent(HigherOrderComponent1, 5, 2)