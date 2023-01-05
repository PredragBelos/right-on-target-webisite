import React from 'react';

export const Partners = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='partners'>
            <div className='wrap container-section partners__container'>
                <h2 className='partners__heading'>Saradnici</h2>
                <div className='partners__box'>
                    <picture className='partners__card'>
                        <img className='partners__img' src='/images/partners-1-1.png' alt='Autonomus province of Vojvodina' />
                    </picture>
                    <picture className='partners__card'>
                        <img className='partners__img' src='/images/partners-2-1.png' alt='Osnovna škola Đura Jakšić logo' />
                    </picture>
                    <picture className='partners__card'>
                        <img className='partners__img' src='/images/partners-3-1.png' alt='Prodavnica Srela Archery Shop logo' />
                    </picture>
                </div>
            </div>
        </section>
    )
}