import React from 'react'
import PropTypes from 'prop-types'
import './card-view.css'
import shortid from 'shortid';
import ShopCard from '../shop-card/ShopCard';

function CardsView(props) {
  const {products} = props;
  const productsWithId = products.map(el => Object.assign(el, {id: shortid.generate()}))
  return (
    <div className="row card-view">
      {productsWithId.map(el => <ShopCard product={el} key={el.id} />)}
    </div>
  )
}

CardsView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }))
}

export default CardsView
