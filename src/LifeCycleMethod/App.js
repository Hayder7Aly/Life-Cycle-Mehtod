import React, { Component } from 'react'
import HigherOrderComponent1 from '../HigherOrderComponents/HigherOrderComponent1'
import Example from '../HigherOrderComponents/Example'

// import ErrorBoundary from './ErrorBoundary'
// import Hero from './Hero'
// import LifeCycleA from './LifeCycleA'
// import ParentComponent from './ParentComponent'
// import Refs from './Refs'

class App extends Component {

    render() {
        return (
            <>
{/*   
                <ErrorBoundary >
                <Hero heroName = "Batman"/>
                </ErrorBoundary>
                <ErrorBoundary >
                <Hero heroName = "joker"/>
                </ErrorBoundary> */}
                {/* <Refs /> */}

                <HigherOrderComponent1 name="Hayder"/>
                <Example />

                

            </>
        )
    }
}

export default App
