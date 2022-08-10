import React from 'react'
import { useState } from 'react'
import CardsView from '../cards-view/CardsView'
import IconSwitch from '../icon-switch/IconSwitch'
import ListView from '../list-view/ListView'
import { products } from './products'

const switchIcon = {
  list: "view_list",
  module: "view_module"
}

function Store() {
  const [view, setView] = useState(switchIcon.module)

  const switchHandler = evt => {
    const target = evt.target;
    const iconText = target.textContent === switchIcon.list 
      ? switchIcon.module 
      : switchIcon.list;
    setView(iconText);
  }

  return (
    <div className='container'>
      <div className="row">
        <IconSwitch view={view} onSwitchHandler={switchHandler}/>
      </div>
      {view === switchIcon.list 
      ? <ListView products={products}/> 
      : <CardsView products={products}/>}
    </div>
  )
}

export default Store;
