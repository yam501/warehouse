import React from 'react';

const ProductItem = ({product}) => {
    return (
        <tr className='p-2 m-1'>
            <th className='ms-4 p-2'>
                {product.category}
            </th>
            <th className='ms-4 p-2'>
                {product.name}
            </th>
            <th className='ms-4 p-2'>
                {product.count}
            </th>
        </tr>
    );
};

export default ProductItem;