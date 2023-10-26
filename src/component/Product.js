import React from 'react';


export default function ProductPicker({ products, uniqueId }) {
  return (
    <label>
      Select a product:
      <select
        name={"selectedProduct" + uniqueId}
        id={"product" + uniqueId}
      >
        <option>PLease select</option>
        {products.map((item, key) => {
          return (
            <option value={item.name} key={item.id}>{item.name}</option>
          )
        })}
      </select>
    </label>
  );
}
