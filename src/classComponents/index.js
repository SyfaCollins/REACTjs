import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
     render(){
        return(
            <div>
            <Header username = 'Syfa' />
            <Greetings />
             </div>
        )
     }
}

class Header extends React.Component{

    render(){
        return(
            <header>
            <p>Welcome {this.props.username}</p>
            </header>
        )
       
    }
}

class Greetings extends React.Component{

    render (){
        const  date = new Date();
        const  hours = date.getHours();
        let timeOfDay;

        if(hours < 12){
            timeOfDay = 'Morning';
        }
        else if(hours > 12 && hours < 17){
            timeOfDay ='Afternoon';

        }
        else 
        {
            timeOfDay = 'Evening'
        }

       return(
        <h4>Good {timeOfDay}!</h4>
       )
    }

  

}

// ReactDOM.render(<App /> , document.getElementById('root'))