import React from 'react'

export default function TodoItem(props) {

    let styles = {
        p : {
            fontSize : '20px',
            fontWeight : '600',
        },

        time : {
            color : 'grey',
            fontSize :'15px'
        }
    }

    return (
        <div>
            <p style = {styles.p}><input type = 'checkbox'></input>{props.todo} <br></br><time style = {styles.time}> {props.time} </time> </p><hr></hr>
        </div>
    )
}
