import React, { useEffect, useState } from 'react';
import ProductPicker from './component/Product';

import './App.css';

function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    fetch('https://consensus-user1-apicast-production.apps.cluster-sglv8.sglv8.sandbox2890.opentlc.com:443/?user_key=2a8d9328738a099871b0b5919b4f175d')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return data && (
    <div className="App">
      <h1>Consensus naming convention helper form</h1>
      <form action="" method="get" class="form-example">
        <div class="form-example">
          <ProductPicker products={data.products} uniqueId="1" label="Select first product" />
        </div>
        <div class="form-example">
          <ProductPicker products={data.products} uniqueId="2" label="(OPTIONAL) Select second product" />
        </div>
        <div class="form-example">
          <ProductPicker products={data.products} uniqueId="3" label="(OPTIONAL) Select third product" />
        </div>
      </form>
    </div >
  );
}

export default App;
