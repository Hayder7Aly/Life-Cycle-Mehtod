import React , {Component} from "react"

class State extends Component{

    constructor(){
        super()
        this.state = {
            name : 'Hayder',
            message : 'go to bazar',
            moto : 'how how'
        }
    }

    changeState(){
        this.setState({
            ...this.state,
            name : 'Raza'
        })
    }


    render(){
        return (
            <>  
                <h1>{this.state.name} {this.state.message} {this.state.moto}</h1>
                <button onClick={()=>this.changeState()}>Click Me</button>
            </>
        )
    }
}

export default State;