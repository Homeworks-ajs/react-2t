import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from '../shop-item/ShopItem'

function ListView({products}) {
  return (
    <div className="row">
      {products.map(elem => <ShopItem product={elem} key={elem.id}/>)}
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }))
}

export default ListView
