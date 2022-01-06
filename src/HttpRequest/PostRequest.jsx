import React, { Component } from 'react'
import axios from 'axios'

class PostRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId : "",
            title : "",
            body : ""
        }
    }

    OnChangeHandler = (event) => {
        const {name , value} = event.target
        this.setState((preVal) => {
            return {
                ...preVal,
                [name] : value

            }
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        // console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

        this.setState({
            userId : "",
            title : "",
            body : ""
        })

    }
    
    render() {
        const {userId , title , body} = this.state
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="userId" value={userId} name="userId" onChange={this.OnChangeHandler}/><br /><br /><br />
                    <input type="text" placeholder="title" value={title} name="title" onChange={this.OnChangeHandler}/><br /><br /><br />
                    <input type="text" placeholder="body" value={body} name="body" onChange={this.OnChangeHandler}/><br /><br /><br />
                    <button type="submit">SubmitMe</button>
                </form>
            </div>
        )
    }
}

export default PostRequest
