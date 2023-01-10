import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setActiveHeaderLink, setHamburgerAndNavView } from '../../js/functions/headerFunctions';

export const Header = () => {

    // STATE ----------------------------------------------------------------------
    const [hamburger_view, set_hamburger_view] = useState('');
    const [nav_view, set_nav_view] = useState('header__center--hide');

    // LIFECICLE ------------------------------------------------------------------

    // Setting active header link
    useEffect(() => {
        setActiveHeaderLink(document.querySelectorAll('.link-header'));
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // Function for setting hamburger and navigation view
    const changeHamburger = () => {
        setHamburgerAndNavView(hamburger_view, set_hamburger_view, set_nav_view);
    }

    // RENDER ---------------------------------------------------------------------
    return (
        <header className='header'>
            <div className='wrap wrap--header header__container'>
                <picture className='header__left'>
                    <img className='header__logo' src='/images/logo.png' alt='Pravo u metu logo' />
                </picture>
                <nav className={`header__center ${nav_view}`}>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link className='link-header link-header--bg-green-tr' to='/project' data=''>O Projketu</Link>
                        </li>
                        <li className='header__item'>
                            <Link className='link-header link-header--bg-green-tr' to='/team'>Tim</Link>
                        </li>
                        <li className='header__item'>
                            <Link className='link-header link-header--bg-green-tr' to='/news'>Vesti</Link>
                        </li>
                        <li className='header__item'>
                            <Link className='link-header link-header--bg-green-tr' to='/blog'>Blog</Link>
                        </li>
                        <li className='header__item'>
                            <Link className='link-header link-header--bg-green-tr' to='/contact'>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
                <div className='header__right'>
                    <button className={`btn-hamburger ${hamburger_view}`} onClick={changeHamburger}>
                        <span className='header__shape'></span>
                        <span className='header__shape'></span>
                        <span className='header__shape'></span>
                    </button>
                </div>
            </div>
        </header>
    )
}