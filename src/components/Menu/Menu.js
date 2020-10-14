import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = ({pages}) => {
    return (
        <ul className="menu">
            {pages.map((page) => (
                <li
                    className="page-link-bullet"
                    key={`page-${page.title}`}
                    >
                    <Link to={page.path}>{page.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Menu;
