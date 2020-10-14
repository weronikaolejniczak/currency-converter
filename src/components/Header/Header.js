import React from 'react';
import {Menu} from '../';
import './style.css';

const Header = ({pages}) => {
    return (
        <header className="App-header">
            <h2>Currency converter</h2>
            <Menu pages={pages} />
        </header>
    );
}

export default Header;