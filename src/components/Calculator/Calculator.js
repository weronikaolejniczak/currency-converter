import React, {useState} from 'react';

const Calculator = () => {
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('PLN');
    const [currencyTo, setCurrencyTo] = useState('USD');

    return (
        <form>
        <div>
          <input
            type="number"
            placeholder="Amount"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
          <span className="label">From:</span>
          <select value={currencyFrom} onChange={(event) => setCurrencyFrom(event.target.value)}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
        <span className="label">To:</span>
          <select value={currencyTo} onChange={(event) => setCurrencyTo(event.target.value)}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
            <span className="result">Result: {amount}</span>
        </div>
      </form>
    );
}

export default Calculator;
