import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../../js/Components/Breadcrums/Breadcrums';
import { Productdisplay } from '../../js/Components/Productdisplay/Productdisplay';
import { Descriptionbox } from '../../js/Components/Descriptionbox/Descriptionbox';
import { Relatedproducts } from '../../js/Components/Relatedproducts/Relatedproducts';

const Product = () => {
  const { allproduct } = useContext(ShopContext);
  const { productid } = useParams();

  if (!allproduct) {
    return <div>Loading products...</div>;
  }

  const product = allproduct.find((e) => e.id === Number(productid));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
  );
};

export default Product;
