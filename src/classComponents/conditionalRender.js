import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Conditional Rendering of Data

class App extends React.Component{
    constructor(){
        super()
            this.state = {
            isLoggerIn : true
            }
        
    }

    render(){

        let confirm;

        if(this.state.isLoggerIn){
           confirm = 'in'
        }
        else
        {
            confirm = 'out. Please login' 
        }
    
        return(
           <h3>You are Logged {confirm}</h3>
          )
   
               
           
       }
}

ReactDOM.render(<App /> , document.getElementById('root'))