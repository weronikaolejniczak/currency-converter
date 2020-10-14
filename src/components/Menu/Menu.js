import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = ({pages}) => {
    return (
        <ul className="menu">
            {pages.map((page) => (
                <li
                    className="menu-link-bullet"
                    key={`page-${page.title}`}
                    >
                    <Link
                        className="menu-link"
                        to={page.path}
                        >{page.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Menu;
