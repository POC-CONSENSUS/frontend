import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://aggeragtor-rh-ee-symartin-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/', { mode: 'cors' })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="App">
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;
