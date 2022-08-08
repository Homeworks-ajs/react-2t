import React from 'react'
import { useState } from 'react'
import ProjectList from '../project-list/ProjectList';
import Toolbar from '../toolbar/Toolbar'
import { cardList } from './cardList';

function Portfolio() {
  const [ state, setState ] = useState("All");
  const [ cardListData, setCardListData ] = useState(cardList);

  const selectFilter = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const txtContent = target.textContent;
    if (state !== txtContent) {
      setState(txtContent)
      setCardListData(cardList.filter(elem => elem.category === txtContent))
    }

    if(txtContent === "All") {
      setCardListData(cardList)
    }
  }

  return (
    <>
      <div className="container ">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={state}
          onSelectFilter={selectFilter} />
        <ProjectList projectList={cardListData}/>
      </div>

    </>)
}

export default Portfolio
