import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
        <ul className='dropdown-menu'>
            {MenuItem.map((item, index) => {
            return (
                <li key={index}>
                <Link
                    className={item.cName}
                    to={item.path}
                >
                    {item.title}
                </Link>
                </li>
            );
            })}
        </ul>
        
        </>
    );
}

export default Dropdown;
