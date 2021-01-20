import React from 'react'
import TodoItem from './TodoItem'
import Data from './TodoData'

export default function App() {

    const dataMap = Data.map(data=> <TodoItem key = {data.id} todo = {data.todo} time = {data.time} />)
    return (
        <div>
             {dataMap}
        </div>
    )
}
