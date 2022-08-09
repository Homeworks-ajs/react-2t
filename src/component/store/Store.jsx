import React from 'react'
import ListView from '../list-view/ListView'
import { products } from './products'


function Store() {
  return (
    <div className='container'>
      <ListView products={products}/>
    </div>

  )
}

export default Store
