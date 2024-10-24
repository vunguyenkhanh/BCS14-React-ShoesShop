import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  let { productsData, setStateModal } = props;
  let renderProductList = () => {
    return productsData.map((product, index) => {
      return (
        <div className="col" key={index}>
          <ProductItem item={product} setStateModal={setStateModal} />
        </div>
      );
    });
  };
  return <div className="row row-cols-1 row-cols-md-3 g-4">{renderProductList()}</div>;
};

export default ProductList;
