import React from 'react'
import PropTypes from 'prop-types'
import './icon-switch.css'

function IconSwitch(props) {
  const {view, onSwitchHandler} = props;
  return (
    <div>
      <span className="material-icons fs-1 d-flex justify-content-end icon-switch"
        onClick={onSwitchHandler}>{view}</span>
    </div>
  )
}

IconSwitch.propTypes = {
  view: PropTypes.string.isRequired,
  onSwitchHandler: PropTypes.func.isRequired
}

export default IconSwitch
