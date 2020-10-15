import React, {useState, useEffect} from 'react';
import {Button, Select, Input} from '../../components';
import './style.css';

const Calculator = () => {
    const [amount, setAmount] = useState(0);
    const [currencies, setCurrencies] = useState([]); // 'AUD', 'BGN', ...
    const [currencyFrom, setCurrencyFrom] = useState('PLN');
    const [currencyTo, setCurrencyTo] = useState('USD');
    const [result, setResult] = useState(0);

    useEffect(() => {
        fetch(`https://api.ratesapi.io/api/latest?base=PLN`)
        .then(res => res.json())
        .then(data => {
            setCurrencies(Object.keys(data.rates));
        })
        .catch(err => console.log(err));

        return () => {
            //clearInterval
            //removeEventListener
        }
    }, []);

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
        <div className="App-Calculator">
            <form onSubmit={handleSubmit}>
                <div className="currency-selectors">
                    <div className="currency-selector-one">
                        <span className="label">From:</span>
                        <Select value={currencyFrom} setCurrency={setCurrencyFrom} currencies={currencies} />
                    </div>
                    <div className="currency-selector-two">
                        <span className="label">To:</span>
                        <Select value={currencyTo} setCurrency={setCurrencyTo} currencies={currencies} />
                    </div>
                </div>

                <div className="input-container">
                    <span className="input-label">Amount</span>
                    <Input setValue={setAmount} />
                </div>

                <div className="action-and-result-container">
                    <div className="button-container">
                        <Button>Calculate</Button>
                    </div>

                    <div className="result-container">
                        <span className="result-tag">Result</span>
                        <div className="result-amount-container">
                            <span className="result-amount">{result.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Calculator;
