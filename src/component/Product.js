import React from 'react';


export default function ProductPicker({ products, uniqueId, label, change }) {

  return (
    <fieldset>
      <legend>{label}</legend>
      <label>
        Select a product:
        <select
          name={"selectedProduct" + uniqueId}
          id={"product" + uniqueId}
          onChange={change}
        >
          <option value="">PLease select</option>
          {products.map((item, key) => {
            return (
              <option value={item.name} key={item.id}>{item.name}</option>
            )
          })}
        </select>
      </label>
    </fieldset>
  );
}
