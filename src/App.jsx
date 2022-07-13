import React, { useEffect, useState } from 'react';
import { getCurrencyFromServer } from './api';
import './App.css';
// import CurrencyRow from './CurrencyRow';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import CurrencyRow from './CurrencyRow';

// const API_KEY = 'JPfcWkIptzQGfEMi4px2c5HYyZcbyj79';
// const BASE_URL =`https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
// const BASE_URL = 'https://api.exchangerate.host/latest';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [key, setKey] = useState('UAH-EUR');
  const [amount, setAmount] = useState(1);
  const [fromAmount, setFromAmount ] = useState();
  const [resultAmount, setResultAmount] = useState();
  const [toAmount, setToAmound] = useState();
  // const [isVisible, setIsVisible] = useState(false);
  // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  // const [exchangeRate, setExchangeRate] = useState();
  console.log(currencyOptions);
  console.log(fromAmount);
  console.log(toAmount);


  const doConvert = () => {
    let result;
    if (key === 'UAH-EUR') {
      result = (Number(amount) / fromAmount).toFixed(3);
    };

    if (key === 'UAH-USD') {
      result = (Number(amount) / fromAmount).toFixed(3);
    };

    setResultAmount(result);
  }

  useEffect(() => {
    getCurrencyFromServer()
      .then(data => {
        // const 
        // const firstCurrency = data.rates;
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromAmount(data.rates.UAH);
        setToAmound(data.rates.EUR);
        // setExchangeRate(data.rates[firstCurrency]);
        console.log(data);
      })
  }, []);

  return (
    <div className="App">
      <h1>Convert</h1>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="UAH-EUR" title="UAH-EUR">
        </Tab>
        <Tab eventKey="UAH-USD" title="UAH-USD">
        </Tab>
        <Tab eventKey="UAH-PLN" title="UAH-PLN">
        </Tab>
      </Tabs>

      <div>
        <input 
          type="number" 
          className="input" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />

        {/* <p className='result'>{amount} UAH  - {(Number(amount) / fromAmount).toFixed(3)} EUR</p> */}
        <p className='result'>{amount} UAH  - {resultAmount} EUR</p>
      </div>

      <button type='button' onClick={doConvert}>Convert</button>
    </div>
  );
}

export default App;
