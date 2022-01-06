import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : "Hayder Aly"
        }

        console.log("LifeCycleA Contrcutor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps");

        return null;
    } 

    componentDidMount() {
        console.log("LifeCycleA ComponentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name : 'Jutt Goriya'
        })
    }
    render() {
        console.log("LifeCycleA render");
        return (
            <>
                <LifeCycleB />
                <button onClick={this.changeState}> State</button>
            </>
        )
    }
}

export default LifeCycleA
