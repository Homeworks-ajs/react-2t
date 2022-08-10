import React from 'react'
import { useState } from 'react'
import ProjectList from '../project-list/ProjectList';
import Toolbar from '../toolbar/Toolbar'
import { cardList, filters } from './data';
import './portfolio.css';
import shortid from 'shortid';

const filtersWithKey = filters.map(el => ({ value: el, id: shortid.generate() }))
const projectListWithKey = cardList.map(el => Object.assign(el, { id: shortid.generate() }))

function Portfolio() {
  const [state, setState] = useState("All");
  const [cardListData, setCardListData] = useState(projectListWithKey);

  const selectFilter = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const txtContent = target.textContent;
    if (state !== txtContent) {
      const filterContent = txtContent === "All"
        ? cardList
        : cardList.filter(elem => elem.category === txtContent);

      setState(txtContent)
      setCardListData(filterContent)
    }
  }

  return (
    <div className="container">
      <div className="row">
      <Toolbar
        filters={filtersWithKey}
        selected={state}
        onSelectFilter={selectFilter} />
      </div>
      <div className="row cardlist-wrapper">
        <ProjectList projectList={cardListData} />
      </div>
    </div>)
}

export default Portfolio
