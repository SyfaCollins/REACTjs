import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component{

  

    render(){

        function click() {
            let content = document.querySelector('div');
            let newDiv = document.createElement('div');
            newDiv.innerHTML = 'This was a click'
            content.parentNode.replaceChild(newDiv,content)

        } 

        return(
            <div>
                <div>Hello World</div>
                <button  onMouseOver = {click}>Click Me!</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))