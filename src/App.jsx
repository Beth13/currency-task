import React, { useEffect, useState } from 'react';
import CurrencyHeader from './components/currencyHeader';
import CurrencyItem from './components/currencyItem';
import { getTodaysCurrency } from './gateway/gateway';

const App = () => {
  const [todaysCurrency, setTodaysCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(0);
  const [isAmountInFromCurrency, setIsAmountInFromCurrency] = useState(true);

  let fromAmount, toAmount;
  if (isAmountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    getTodaysCurrency('UAH').then(res => {
      const keys = Object.keys(res);
      const firstKey = keys[0];
      const secondKey = keys[1];
      setTodaysCurrency(res);
      setFromCurrency(firstKey);
      setToCurrency(secondKey);
      setExchangeRate(res[secondKey]);
    });
  }, []);

  useEffect(() => {
    if (fromCurrency !== undefined) {
      getTodaysCurrency(fromCurrency).then(res => setExchangeRate(res[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleChangeFromAmount = event => {
    setAmount(event.target.value);
    setIsAmountInFromCurrency(true);
  };

  const handleChangeToAmount = event => {
    setAmount(event.target.value);
    setIsAmountInFromCurrency(false);
  };

  return (
    <div className="page">
      <span className="page__title">Currency checker!</span>
      <CurrencyHeader todaysCurrency={todaysCurrency} />
      <div className="page__items">
        <CurrencyItem
          todaysCurrencyNames={Object.keys(todaysCurrency)}
          selectedCurrency={fromCurrency}
          handleCurrency={event => setFromCurrency(event.target.value)}
          handleChangeAmount={handleChangeFromAmount}
          amount={fromAmount}
          title="From:"
        />
        <CurrencyItem
          todaysCurrencyNames={Object.keys(todaysCurrency)}
          selectedCurrency={toCurrency}
          handleCurrency={event => setToCurrency(event.target.value)}
          handleChangeAmount={handleChangeToAmount}
          amount={toAmount}
          title="To:"
        />
      </div>
    </div>
  );
};

export default App;
