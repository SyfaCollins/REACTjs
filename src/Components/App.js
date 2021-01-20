import React from 'react'
import Joke from "./Joke"
import DataBase from './JokeData'

function App(){
    const jokeMap = DataBase.map(joke=> <Joke id={joke.id} Question = {joke.question} 
    punchline = {joke.punchline} />)


    return (
        <div>
          {jokeMap}
        </div>
    )
}

export default App