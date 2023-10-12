import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://aggeragtor:8080',)
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
