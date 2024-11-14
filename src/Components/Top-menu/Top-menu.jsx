import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top-menu.css';

const TopMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar">
            <div className="nav-container">
                {/* Гамбургер меню */}
                <div className="hamburger-lines" onClick={toggleMenu}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>

                {/* Логотип */}
                <div className="logo">
                    <h1>24Web</h1>
                </div>

                {/* Меню */}
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={isMenuOpen}
                    onChange={toggleMenu}
                    id="menu-toggle"
                />
                <ul className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={closeMenu}>Главная</Link>
                    </li>
                    <li>
                        <Link to="/practical" onClick={closeMenu}>Практические работы</Link>
                    </li>
                    <li>
                        <Link to="/conspect" onClick={closeMenu}>Конспекты</Link>
                    </li>
                    <li>
                        <Link to="/raspisanye" onClick={closeMenu}>Расписание</Link>
                    </li>
                    <li>
                        <Link to="/info" onClick={closeMenu}>Информация</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopMenu;
