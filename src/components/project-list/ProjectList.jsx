import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid';
import './project-list.css';

function ProjectList({ projectList }) {
  return (
    <>
      {projectList.map(elem => {
        return (
          <img className="portfolio-item" src={elem.img} alt={elem.category} key={elem.id} />
        )
      })}
    </>

  )
}

ProjectList.propTypes = {
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  )
}

export default ProjectList
