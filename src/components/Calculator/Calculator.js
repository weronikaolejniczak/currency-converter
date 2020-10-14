import React from 'react';

const Calculator = () => {
    return (
        <form>
        <div>
          <input
            type="number"
            placeholder="Amount"
            onChange={(event) => {console.log(event.target.value)}}
          />
        </div>
        <div>
          <span className="label">From:</span>
          <select onChange={(event) => {console.log(event.target.value)}}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
        <span className="label">To:</span>
          <select onChange={(event) => {console.log(event.target.value)}}>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
            <span className="result">Result:</span>
        </div>
      </form>
    );
}

export default Calculator;
