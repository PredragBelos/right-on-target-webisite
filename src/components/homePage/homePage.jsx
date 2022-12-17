import React, { useEffect } from 'react';
import { slider_data } from '../../js/data/sliderData';
import { AboutProject } from '../aboutProject/aboutProject';
import { Goals } from '../goals/goals';
import { Header } from '../header/header';
import { Partners } from '../partners/partners';
import { Results } from '../results/results';
import { Slider } from '../slider/slider';
import { Foоter } from '../footer/footer';

export const HomePage = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <div className='home'>
            <Header />
            <Slider
                slider_data={slider_data}
                slider_interval={15000}
            />
            <AboutProject />
            <Goals />
            <Results />
            <Partners />
            <Foоter />
        </div>
    )
}