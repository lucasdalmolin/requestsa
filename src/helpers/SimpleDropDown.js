import { useState } from "react";


export const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [head, ...tail] = children.toArray(children);
    
    return (
        <div
            className='menu'
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {head}
            {isOpen && <div className='open'>{tail}</div>}
        </div>
        );
    };
    
    const Item = ({ children, onClick }) => {
        return (
        <div className='item' onClick={onClick}>
            {children}
        </div>
        );
    };
    
    const menuInstance = (
        <Menu>
            <Item onClick={() => alert('Link one clicked!')}>Link One</Item>
            <Item onClick={() => alert('Link two clicked!')}>Link Two</Item>
            <Item onClick={() => alert('Link three clicked!')}>Link Three</Item>
        </Menu>
    );

