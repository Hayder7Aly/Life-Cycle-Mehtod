import React, { Component } from 'react'

export class FormComponent extends Component {
    constructor(){
        super()
        this.state = {
            userName : ""
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            userName : [event.target.value]
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.userName}</h1>
                <input type="text" onChange={this.onChangeHandler} value={this.state.userName} />
            </>
        )
    }
}

export default FormComponent
