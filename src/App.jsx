import React from "react";
import { Currency} from "./components/Currency";
import "./App.css";
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";

// const options = [
//   {id: 'EUR', title: 'UAH-EUR'},
//   {id: 'USD', title: 'UAH-USD'},
//   {id: 'PLN', title: 'UAH-PLN'}
// ]

const App = () => {
  // const currencyOption = useSelector(state => state.currency.currentCurrencyOption);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<Currency/>}/>
          {/* <Route path="tabs/:id" element={<Currency/>}/> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
