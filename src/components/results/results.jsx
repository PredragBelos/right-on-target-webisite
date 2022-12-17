import React, { useState } from 'react';
import { Counter } from '../counter/counter';
import ScrollTrigger from 'react-scroll-trigger';


export const Results = () => {

    // STATE ----------------------------------------------------------------------
    const [counter_on, set_counter_on] = useState(false);

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='results'>
            <div className='wrap container-section results__container'>
                <h2 className='results__heading'>Rezultati</h2>
                <ScrollTrigger onEnter={() => set_counter_on(true)}>
                    <div className='results__counters'>
                        <div className='results__block'>
                            <div className='results__circle'>
                                <Counter end={65} start={0} delay={0} duration={1.5} counter_on={counter_on} />
                            </div>
                            <span className='results__text'>učenika</span>
                        </div>
                        <div className='results__block'>
                            <div className='results__circle'>
                                <Counter end={90} start={0} delay={0} duration={1.5} counter_on={counter_on} />
                            </div>
                            <span className='results__text'>časova</span>
                        </div>
                        <div className='results__block'>
                            <div className='results__circle'>
                                <Counter end={11000} start={0} delay={0} duration={1.5} counter_on={counter_on} />
                            </div>
                            <span className='results__text'>strela</span>
                        </div>
                        <div className='results__block'>
                            <div className='results__circle'>
                                <Counter end={66000} start={0} delay={0} duration={1.5} counter_on={counter_on} />
                            </div>
                            <span className='results__text'>poena</span>
                        </div>
                    </div>
                </ScrollTrigger >
            </div>
        </section>
    )
}