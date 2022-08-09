import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
  const { product } = props;
  return (
    <div className='row m-1 rounded bg-light d-flex justify-content-around align-items-center'>
      <div className="col d-flex align-items-start m-0 p-0">
        <img src={product.img} alt="" style={{width: '70px'}}/>
      </div>
      <div className="col text-center text-uppercase fs-4 fw-bold">
        {product.name}
      </div>
      <div className="col text-center text-secondary">
        {product.color}
      </div>
      <div className="col text-center text-danger fs-5 fw-bold">
        {"$"+product.price}
      </div>
      <div className="col d-flex justify-content-md-end">
        <button type="button" className="btn btn-danger text-uppercase">add to card</button>
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })
}

export default ShopItem
