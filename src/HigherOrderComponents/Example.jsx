import React, { Component} from 'react'
import UpdateComponent from './HigherOrderComponent2';
class Example extends Component {
    render() {
        const {count , incrementCount} = this.props

        return (
            <>
                <h1 onMouseOver={incrementCount}>Hover is : {count}</h1>
            </>
        )
    }
}
// har ghari chashmay kharidar mein rehanay kaliya 
// kuch hoonoor chahiya bazaar mein rahney kaliya

export default UpdateComponent(Example, 10, 2)
