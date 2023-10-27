import React from 'react';
import ProductPicker from './Product';

export default function ProductList({ products, label, change }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <form action="" method="get" className="form">
        <div className="form-row">
          <ProductPicker products={products} uniqueId="1" label="Select first product" change={change} />
        </div>
        <div className="form-row">
          <ProductPicker products={products} uniqueId="2" label="(OPTIONAL) Select second product" change={change} />
        </div>
        <div className="form-row">
          <ProductPicker products={products} uniqueId="3" label="(OPTIONAL) Select third product" change={change} />
        </div>
      </form>
    </fieldset>
  );
}
