import React from 'react'
import PropTypes from 'prop-types'

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <ul className="nav nav-tabs">
      {filters.map(element => {
        return <li className="nav-item" key={element.id}>
          <a
            className={(element.value === selected) ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="#"
            onClick={onSelectFilter}
          >{element.value}</a>
        </li>
      })}
    </ul>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired
  })).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar
