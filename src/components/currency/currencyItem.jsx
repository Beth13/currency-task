import React from 'react';

import '../styles/currencyItem.scss';

const CurrencyItem = ({
  todaysCurrencyNames,
  selectedCurrency,
  amount,
  handleCurrency,
  handleChangeAmount,
  title,
}) => {
  return (
    <div className="currency__item">
      <span className="currency__item-title">{title}</span>
      <select className="currency__item-select" value={selectedCurrency} onChange={handleCurrency}>
        {todaysCurrencyNames.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="currency__item-input"
        value={Number(amount).toFixed(2)}
        onChange={handleChangeAmount}
      />
    </div>
  );
};

export default CurrencyItem;
