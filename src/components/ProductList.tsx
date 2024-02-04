import React from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  // Using an underscore prefix to indicate that the variable is intentionally unused
  let _pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    _pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  // Directly using the JSX in the content without an explicit variable
  const content = <main className="main main--products">{_pageContent}</main>;

  return content;
};

export default ProductList;
