import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    const filtersWithKey = filters.map(el => ({
        value: el,
        id: shortid.generate()
    }))
    return (
        <ul className="nav nav-tabs">
            {filtersWithKey.map(element => {
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
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar
