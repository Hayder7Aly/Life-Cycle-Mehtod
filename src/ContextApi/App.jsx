import React, { Component } from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from './UserContext'



class App extends Component {
    render() {
        return (
            <>
               <UserProvider value="Hayder Aly Jutt">
                   <ComponentA />
               </UserProvider>
            </>
        )
    }
}

export default App



