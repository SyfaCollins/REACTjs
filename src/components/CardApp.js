import React from 'react'

function Contact(props) {
let styles = {
    body :{
        fontFamily : "Arial",
        margin : '1em',
        backgroundColor : 'blue',
        },

    h2 : {
        color:"red",
        fontSize : "2em",
    },

    p : {
        color : "#033",
        backgroundColor : 'wheat',
        fontSize : '1em',
        width : '15em',
        height : '5em'
    }
}

    return (
        <contact style= {styles.body}>
            <img src={props.imgUrl} alt= "img"></img>
            <h2 style = {styles.h2}>{props.info.name}</h2>
            <p  style = {styles.p} >Phone:{props.info.phone}</p>
            <p  style = {styles.p} >Email:{props.info.email}</p>
        </contact>
        
    )
    
}

export default Contact