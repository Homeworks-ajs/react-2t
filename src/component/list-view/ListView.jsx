import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from '../shop-item/ShopItem'
import shortid from 'shortid'

function ListView(props) {
  const {products} = props;
  const productsWithId = products.map(el => el);

  return (
    <div className="row">
      {productsWithId.map(elem => <ShopItem product={elem} key={elem.key}/>)}
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
