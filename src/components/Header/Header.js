import React from 'react';
import {Menu, Logo} from '../';
import './style.css';

const Header = ({pages}) => {
    return (
        <header className="App-header">
            <Logo />
            <Menu pages={pages} />
        </header>
    );
}

export default Header;
