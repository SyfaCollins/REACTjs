import React from 'react'
import Data from './productData'
import ProductStructure from './ProductStructure'

export default function App() {
    const prodData = Data.map(data =>  <ProductStructure key = {data.id} product = {data.product} price = {data.price} description = {data.description} />)

    return (
        <div>
            {prodData}
        </div>
    )
}
