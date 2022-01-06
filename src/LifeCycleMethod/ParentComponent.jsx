import React, { PureComponent } from 'react'
import RegularComponents from './RegularComponents'
import PureComponents from './PureComponents'
import Memo from './Memo'
import { Component } from 'react'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Hayder'
        }
    }
    
    componentDidMount(){
        
        setInterval(()=>{
            this.setState({
                name : "Hayder"
            })
        },2000)
    }

    render() {
        console.log("Parent Component Render");
        return (
            <div>
                Parent compionent
                <Memo name={this.state.name}/>
                {/* <RegularComponents name={this.state.name}/> */}
                {/* <PureComponents name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComponent
