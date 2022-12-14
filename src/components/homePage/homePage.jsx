import React from 'react';
import { slider_data } from '../../js/data/sliderData';
import { AboutProject } from '../aboutProject/aboutProject';
import { Header } from '../header/header';
import { Slider } from '../slider/slider';

export const HomePage = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

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
        </div>
    )
}