import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component{

    constructor(){
        super()
        this.state = {
            name:'Syfa',
            age: 24

        }
    }

    render(){
        return(
            <div>
                <h1>Name:{this.state.name}</h1>
                <p>Age: {this.state.age} years old</p>

            </div>
        )
    }

}

ReactDOM.render(<App /> , document.getElementById('root'))