import React from 'react';

const ProductItem = (props) => {
  let { item, setStateModal } = props;
  return (
    <div className="card h-100">
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
        data-bs-toggle="modal"
        data-bs-target="#modalDetail"
        onClick={() => setStateModal(item)}
        style={{ cursor: 'pointer' }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <button type="button" className="btn btn-primary me-2">
          <i class="fa-solid fa-cart-shopping"></i> Add To Cart
        </button>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modalDetail"
          onClick={() => setStateModal(item)}
        >
          <i class="fa-solid fa-circle-info"></i> View Detail
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
