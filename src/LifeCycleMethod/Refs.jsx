import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef() 
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(`your name is ${this.inputRef.current.value}`)
    }


    
    render() {
        return (
            <>
              <input type="text" ref={this.inputRef}/>  
              <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}

export default Refs


