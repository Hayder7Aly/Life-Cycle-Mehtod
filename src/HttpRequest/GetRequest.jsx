import React, { Component } from 'react'
import axios from 'axios'

class GetRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts : []
        }
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
            this.setState({posts : data})
        }).catch((error)=>{
            console.log(error);
        })
   
   
    }
    
    render() {
        
        return (
            <>
                <h3>List of Posts</h3>
                {
                    this.state.posts.map(post => <h5 key={post.id}>{post.body} </h5> )
                }

            </>
        )
    }
}

export default GetRequest
