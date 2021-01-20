import React from 'react'

function Joke(props) {

    return(
        <div>
            <h3 style = {{color:'grey'}}>Question:{props.Question}</h3>
            <p>Answer:{props.punchline}</p>
        </div>
    )
    
}

export default Joke