import React, {useState} from 'react';
import {Button, Select} from '../';

const Calculator = () => {
    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('PLN');
    const [currencyTo, setCurrencyTo] = useState('USD');
    const [result, setResult] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.ratesapi.io/api/latest?base=${currencyFrom}`)
            .then(res => res.json())
            .then(data => {
                setResult(amount * data.rates[currencyTo]);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <span className="result">Result: {result.toFixed(2)}</span>
            </div>
            <div>
                <Button>Send</Button>
            </div>
        </form>
    );
}

export default Calculator;
