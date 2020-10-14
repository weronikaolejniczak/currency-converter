import React from 'react';
import {Menu} from '../';

const Header = ({pages}) => {
    return (
        <header className="App-header">
            <h1>Currency converter</h1>
            <Menu pages={pages} />
        </header>
    );
}

export default Header;
