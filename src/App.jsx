import React from 'react';
import CurrencyHeader from './components/currencyHeader';
import CurrencyItem from './components/currencyItem';

const App = () => {
  return (
    <div className="page">
      <span className="page__title">Check your currency!</span>
      <CurrencyHeader />
      <div className="page__items">
        <CurrencyItem />
        <CurrencyItem />
      </div>
    </div>
  );
};

export default App;
