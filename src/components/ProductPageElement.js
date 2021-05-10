import React from "react";
import Product from "./Product";

const ProductPageElement = ({ product, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div>
            <div className="row">
              {product.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPageElement;


