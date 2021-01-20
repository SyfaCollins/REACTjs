import React from 'react'

export default function ProductStructure(props) {
    return (
        <div>
            <h4>Product:{props.product}</h4>
            <p>Price:{props.price}</p>
            <p>Description:{props.description}</p>
        </div>
    )
}
