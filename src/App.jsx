import React, {useEffect, useState} from 'react';
import { getCurrencyFromServer } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAmount, setCurrencyOption, loadCurrency} from './store/reducers/currencyReducer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


function App() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const money = useSelector(state => state.currency.money);
  const currencyOption = useSelector(state => state.currency.currentCurrencyOption);
  const currency = useSelector(state => state.currency.currency);

  useEffect(() => {
    getCurrencyFromServer()
      .then(data => {
        dispatch(loadCurrency(data.rates));
        console.log(data.rates);
      })
  }, [dispatch]);

  const openResult = () => {
    const moneys = value;

    dispatch(getAmount(moneys));
    setValue('');
  };

  return (
    <div className="App">
      <h1>Convert</h1>

      <Tabs
        id="controlled-tab-example"
        activeKey={currencyOption}
        // onSelect={(k) => dispatch(setCurrencyOption(k))}
        onSelect={(k) => dispatch(setCurrencyOption(k))}
        className="mb-3"
      >
        <Tab eventKey="EUR" title="UAH-EUR">
        </Tab>
        <Tab eventKey="USD" title="UAH-USD">
        </Tab>
        <Tab eventKey="PLN" title="UAH-PLN">
        </Tab>
      </Tabs>

      <div>
        <input 
          type="number" 
          className="input" 
          value={value}
          onChange={(e) => setValue(e.target.value)} 
        />
        <button type="button" onClick={openResult}>Add</button>

        {money > 0 && 
           <p 
             className='result'
            >
              {money} UAH
              {' - '} 
              {/* {money.toAmount} {currencyOption} */}
              {(money * currency[currencyOption]).toFixed(3)} {currencyOption}

            </p>
        }
       
      </div>
    </div>
  );
}

export default App;
