import React from 'react'
import Contact from './CardApp'
import "./logo512.png"

function App() {

    return(
        <div className = "app">
            <Contact info = {{imgUrl : "./logo512.png alt:'logo'", name : 'Syfa', phone : '+256 709 839 090', Email : 'coniplexy@gmail.com'}} />
            <Contact info = {{imgUrl : "./logo512.png alt:'logo'", name : 'Trevor', phone : '+256 709 839 090', Email : 'coniplexy@gmail.com'}} />
            <Contact info = {{imgUrl : "./logo512.png alt:'logo'", name : 'Dave', phone : '+256 709 839 090', Email : 'coniplexy@gmail.com'}} />
            <Contact info = {{imgUrl : "./logo512.png alt:'logo'", name : 'Sylar', phone : '+256 709 839 090', Email : 'coniplexy@gmail.com'}} />
            
        </div>
    )
    
}

export default App