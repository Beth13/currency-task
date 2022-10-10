import React, { useEffect, useState } from 'react';
import CurrencyHeader from './currencyHeader';
import CurrencyItem from './currencyItem';

import * as actions from './currencyItem.actions';
import { currSelector } from './currencyItem.selector';
import { connect } from 'react-redux';

const Main = ({ getCurrList, todaysCurrency }) => {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(0);
  const [isAmountInFromCurrency, setIsAmountInFromCurrency] = useState(true);

  useEffect(() => {
    getCurrList(fromCurrency || 'UAH');
  }, [toCurrency, fromCurrency]);

  useEffect(() => {
    setExchangeRate(todaysCurrency.curr[toCurrency]);
  });

  let fromAmount = amount;
  let toAmount = amount;

  if (isAmountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

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
      <CurrencyHeader todaysCurrency={todaysCurrency.curr} />
      <div className="page__items">
        <CurrencyItem
          todaysCurrencyNames={Object.keys(todaysCurrency.curr)}
          selectedCurrency={fromCurrency}
          handleCurrency={event => setFromCurrency(event.target.value)}
          handleChangeAmount={handleChangeFromAmount}
          amount={fromAmount}
          title="From:"
        />
        <CurrencyItem
          todaysCurrencyNames={Object.keys(todaysCurrency.curr)}
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

const mapState = state => {
  return {
    todaysCurrency: currSelector(state),
  };
};

const mapDispatch = {
  getCurrList: actions.getCurrList,
};

export default connect(mapState, mapDispatch)(Main);
