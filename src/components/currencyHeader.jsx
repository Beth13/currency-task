import moment from 'moment/moment';
import React from 'react';

import '../styles/currencyHeader.scss';
const CurrencyHeader = () => {
  return (
    <header className="header">
      <h2 className="header__title">{`Today's (${moment(new Date()).format(
        'MMM Do YY',
      )}) currency:`}</h2>
      <div className="header__currency">
        <span className="header__currency-item">{`USD: 39`}</span>
        <span className="header__currency-item">{`EUR: 42`}</span>
      </div>
    </header>
  );
};

export default CurrencyHeader;
