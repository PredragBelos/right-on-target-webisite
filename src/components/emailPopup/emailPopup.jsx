import React from 'react';

export const EmailPopup = ({ visibility, setVisibility, text }) => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    /* Function for setting visibility */
    const setPopVisibility = () => {
        (visibility === 'hide') ? setVisibility('') : setVisibility('hide');
    }

    // RENDER ---------------------------------------------------------------------
    return (
        <div className={`email-pop ${visibility}`}>
            <div className='email-popup__box'>
                <span className='email-popup__text'>{text}</span>
                <button className='btn btn--txt-green-hover' onClick={setPopVisibility}>OK</button>
            </div>
        </div>
    )
}