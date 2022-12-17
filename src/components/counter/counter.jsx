import React from 'react';
import CountUp from 'react-countup';

export const Counter = ({ start, end, duration, delay, counter_on }) => {

    // STATE ----------------------------------------------------------------------
    
    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
            < span className='counter'>
                {counter_on && <CountUp start={start} end={end} duration={duration} delay={delay} />}
            </span>
    )
}