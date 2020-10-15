import React from 'react';
import {Menu} from '../';
import './style.css';

const Header = ({pages}) => {
    return (
        <header className="App-header">
            {/* uppercase, one part green, other not, different sizes, baseline */}
            <h2 className="logo">
                <span className="logo-part-one">Currency</span>
                <span className="logo-part-two">converter</span>
            </h2>
            <Menu pages={pages} />
        </header>
    );
}

export default Header;
