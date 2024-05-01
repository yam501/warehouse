import React from 'react';

const HistoryItem = ({product}) => {
    return (
        <tr>
            <th>
                {product.date}
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