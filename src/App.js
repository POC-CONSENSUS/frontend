import React, { Component, useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://aggeragtor:8080')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  
  render() {
    return (
      <div className="App">
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}  
      </div>
    );
  }
}

export default App;
