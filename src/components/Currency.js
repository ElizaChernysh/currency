import React, { useEffect, useState } from 'react';
import { getCurrencyFromServer } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAmount, setCurrencyOption, loadCurrency } from '../store/reducers/currencyReducer';
import './Currency.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Currency = () => {
  const [value, setValue] = useState('');
  const [resultAmout, setResultAmount] = useState('');

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

  useEffect(() => {
    setResultAmount((money * currency[currencyOption]).toFixed(3))
  }, [money, currencyOption, currency]);

  return (
    <div className="Currency">
      <h1 className='Currency__title'>Convert</h1>

      <Tabs
        id="controlled-tab-example"
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

      <InputGroup className="mb-3">
        <Form.Control
          type="number"
          placeholder='Enter the number'
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type="button"
          onClick={openResult}
          variant="primary"
        >
          Convert
        </Button>
      </InputGroup>
      {
        money > 0 &&
        <p
          className='result'
        >
          {money} UAH
          {' - '}
          {resultAmout} {currencyOption}
        </p>
      }


    </div >
  );
};

