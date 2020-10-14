import React from 'react';

const Calculator = () => {
    return (
        <form>
        <div>
          <input type="number" placeholder="Amount" />
        </div>
        <div>
          <span>From:</span>
          <select>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
        <span>To:</span>
          <select>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </form>
    );
}

export default Calculator;
