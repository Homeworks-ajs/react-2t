import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
  const { product } = props;

  return (
    <div className="card m-5 h-100 w-25 bg-light">
      <div className="card-body p-0 d-flex flex-column align-items-center">
        <h5 className="card-title fs-4 text-uppercase">{product.name}</h5>
        <p className="card-text text-secondary">{product.color}</p>
      </div>
      <img className="card-img-top" src={product.img} alt={product.name} />
      <div className="card-body d-flex justify-content-between align-items-center p-1">
        <p className="card-text fs-4 text-danger">{"$" + product.price}</p>
        <button type="button" className="btn btn-danger text-uppercase h-50">add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })
}

export default ShopCard
