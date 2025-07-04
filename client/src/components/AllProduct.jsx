import React from 'react';
import ProductCart from './ProductCart';
import { products } from '../assets/assets';

const AllProduct = () => {
  return (
    <div className='mt-16'>
      <div className='text-2xl font-semibold'>All Products</div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 items-stretch mt-6">
        {
          products
            .map((product, index) => (
              <ProductCart key={index} product={product} />
            ))
        }
      </div>
    </div>
  );
};

export default AllProduct;
