import React from 'react';

import '../styles/currencyItem.scss';

const CurrencyItem = () => {
  return (
    <div className="currency__item">
      <select className="currency__item-select" name="" id="">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
      </select>
      <input type="number" className="currency__item-input" />
    </div>
  );
};

export default CurrencyItem;
