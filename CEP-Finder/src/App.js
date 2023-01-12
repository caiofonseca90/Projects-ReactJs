import {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './assets/css/style.css';
import React from 'react';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function valueInput(){
    if(input === ''){
      alert("Preecha com algum dado valido!" );
      return;
    }
    try{
      const response = await api.get(`${input}/json`);
      setCep (response.data);
      setInput('');
    }
    catch{
      alert("Erro ao buscar CEP!")
      setInput(''); // validates the field and returns empty
    }
  }
return (
    <div className="container">
      
      <h1 className="title">CEP Finder</h1>
      
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={ (e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={valueInput}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>
      
      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
      
      
    </div>
  );
}

export default App;
