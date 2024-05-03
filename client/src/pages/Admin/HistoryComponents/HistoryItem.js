import React from 'react';

const HistoryItem = ({product}) => {
    return (
        <tr>
            <th>
                {product.date.slice(0, 10)}
                <p>
                    {product.date.slice(11, 19)}
                </p>
            </th>
            <th>
                {product.category}
            </th>
            <th>
                {product.name}
            </th>
            <th>
                {product.changes}
            </th>
        </tr>
    );
};

export default HistoryItem;