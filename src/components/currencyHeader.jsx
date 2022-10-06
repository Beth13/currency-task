import moment from 'moment/moment';
import React from 'react';

import '../styles/currencyHeader.scss';

const CurrencyHeader = ({ todaysCurrency }) => {
  return (
    <header className="header">
      <h2 className="header__title">{`Today's (${moment(new Date()).format(
        'MMM Do YY',
      )}) currency:`}</h2>

      <div className="header__currency">
        <span className="header__currency-item">{`USD: ${(
          todaysCurrency.UAH / todaysCurrency.USD
        ).toFixed(2)}`}</span>
        <span className="header__currency-item">{`EUR: ${(
          todaysCurrency.UAH / todaysCurrency.EUR
        ).toFixed(2)}`}</span>
      </div>
    </header>
  );
};

export default CurrencyHeader;
