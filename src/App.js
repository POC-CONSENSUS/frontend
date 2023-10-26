import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://consensus-user1-apicast-production.apps.cluster-sglv8.sglv8.sandbox2890.opentlc.com:443/?user_key=2a8d9328738a099871b0b5919b4f175d')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="App">
      {data ? <pre>{JSON.parse(data)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;
