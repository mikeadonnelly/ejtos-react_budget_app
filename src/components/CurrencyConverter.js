import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency is set to Dollar

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div>
      <label>Select Currency:</label>
      <select value={selectedCurrency} onChange={(e) => handleCurrencyChange(e.target.value)}>
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>

      {/* Rest of your currency conversion logic goes here */}
    </div>
  );
};

export default CurrencyConverter;