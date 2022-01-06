import React from "react"

class SetState extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0,
            message : 'Hayder'
        }

        this.counter = this.counter.bind(this)
    }

    counter(check){
        check ? this.setState(preVal => ({count : preVal.count + 1})) : this.setState(preVal => ({count : preVal.count - 1}))
    }


    changeText = () => {
        this.setState((preVal) => ({
            ...preVal,
            message : 'Aly'
        }))
    }



    render(){
        return (
            <>
                <h1>{this.state.message} Set State ... {this.state.count}</h1>
                <button onClick={()=>this.counter(true)}>Increment</button>
                <button onClick={()=>this.counter(false)}>Decremnt</button>
                {/* <button onClick={this.counter.bind(this)}>Decrement</button> */}
                {/* <button onClick={this.counter}>Increment</button> */}

                <button onClick={this.changeText}>change text</button>
            </>
        )
    }
}


export default SetState;