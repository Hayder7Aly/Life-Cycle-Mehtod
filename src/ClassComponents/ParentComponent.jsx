import React, { Component } from 'react'

class ChildComponent extends Component {
    render(){
        return (
            <>
                <button onClick={this.props.onSelect}>Click Me</button>
            </>
        )
    }
}

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName : 'parent'
        }
    }

    getParent = () => {
        alert('Heelo ' + this.state.parentName)
    }
    
    render() {
        return (
            <>
                <h1>Heelo Methods as Props</h1>
                <ChildComponent onSelect={this.getParent}/>
            </>
        )
    }
}

export default ParentComponent
