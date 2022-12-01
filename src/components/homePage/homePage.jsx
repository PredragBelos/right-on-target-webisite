import React from 'react';
import { Header } from '../header/Header';

export const HomePage = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <div className='home'>
            <div className='wrap home__container'>
                <div className='home__top'>
                    <img src='/images/logo.png' alt='Logo' className='home__logo' />
                </div>
                <Header />
            </div>
        </div>
    )
}