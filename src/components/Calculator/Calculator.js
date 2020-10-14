import React, {useState} from 'react';
import {Select} from '../';

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
                <Select value={currencyFrom} setCurrency={setCurrencyFrom} />
            </div>

            <div>
                <span className="label">To:</span>
                <Select value={currencyTo} setCurrency={setCurrencyTo} />
            </div>

            <div>
                <span className="result">Result: {amount}</span>
            </div>
        </form>
    );
}

export default Calculator;
