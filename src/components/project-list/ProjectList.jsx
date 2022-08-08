import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid';

function ProjectList(props) {
  const { projectList } = props;

  const projectListWithKey = projectList.map(el => ({
    img: el.img,
    category: el.category,
    id: shortid.generate()
  }))

  return (
    <>
      {projectListWithKey.map(elem => {
        return (<div style={{ maxWidth: "400px", margin: "5px", padding: 0, display: 'inline-block'}} key={elem.id}>
            <img src={elem.img} className="card-img-top" alt={elem.category}/>
          </div>
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
