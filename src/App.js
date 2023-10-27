import React, { useEffect, useState } from 'react';
import './App.css';

import StagePicker from './component/Stage';
import LevelPicker from './component/Level';
import UseCaseInput from './component/UseCase';
import ProductList from './component/ProductList';
import Result from './component/Result';

function App() {

  const [data, setData] = useState(null);
  const [product, setproduct] = useState({
    product1: '',
    product2: '',
    product3: ''
  });
  const [stage, setstage] = useState('');
  const [level, setlevel] = useState('');
  const [commentText, setCommentText] = useState("")
  const [result, setResult] = useState("")

  const handleChangeStage = (event) => {
    if (event.target.value === "") {
      setstage("");
    } else {
      setstage("(" + event.target.value.toLowerCase() + ")");
    }
  }

  const handleChangeProduct = (event) => {
    if (event.target.value === "") {
      setproduct({ ...product, [event.target.id]: "" });
    } else {
      setproduct({ ...product, [event.target.id]: "_" + event.target.value });
    }
  }

  const handleChangeLevel = (event) => {
    if (event.target.value === "") {
      setlevel("");
    } else {
      setlevel('-' + event.target.value);
    }
  }

  const handleChangeUseCase = (event) => {
    setCommentText('-' + event.target.value.toLowerCase());
  }

  const handleChangeResult = (event) => {
    setResult(event.target.value);
  }

  useEffect(() => {
    fetch('https://consensus-user1-apicast-production.apps.cluster-sglv8.sglv8.sandbox2890.opentlc.com:443/?user_key=2a8d9328738a099871b0b5919b4f175d')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);


  return data && (
    <div className="App">
      <h1>Consensus naming convention helper form</h1>
      <StagePicker stages={data.stages} label="STEP 1: Choose the stage" change={handleChangeStage} />
      <ProductList label="STEP 2: Choose the product(s)" products={data.products} change={handleChangeProduct} />
      <LevelPicker levels={data.levels} label="STEP 3: Choose the level" change={handleChangeLevel} />
      <UseCaseInput label="STEP 4: Describe the use case" uniqueId="usecase" change={handleChangeUseCase} />
      <Result label="Result" uniqueId="result" value={stage + product.product1 + product.product2 + product.product3 + level + commentText} change={handleChangeResult} />
    </div >
  );
}

export default App;
