import React, { useState, useEffect } from 'react';
import { changeSliderData } from '../../js/functions/sliderFunctions';

export const Slider = ({ slider_data, slider_interval }) => {

    // STATE ----------------------------------------------------------------------
    const [slider_title, set_slider_title] = useState(slider_data[0].title);
    const [slider_text, set_slider_text] = useState(slider_data[0].text);
    const [slider_img, set_slider_img] = useState(slider_data[0].image);

    // LIFECICLE ------------------------------------------------------------------

    // Start slider after page loading
    useEffect(() => {
        // Set first ciklus
        changeSliderData(slider_data, set_slider_title, set_slider_text, set_slider_img);

        // Cretae infinite loop for slider
        const interval = setInterval(
            () => { changeSliderData(slider_data, set_slider_title, set_slider_text, set_slider_img) }, slider_interval
        );

        return () => clearInterval(interval);
    }, [slider_data, slider_interval])

    // FUNCTIONS ------------------------------------------------------------------

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='slider'>
            <div className='wrap slider__container'>
                <div className='slider__box'>
                    <div className='slider__left'>
                        <img src={slider_img} alt='Archery' id='slider-img' />
                    </div>
                    <div className='slider__right'>
                        <div className='slider__content'>
                            <h4 className='slider__title' id='slider-title'>{slider_title}</h4>
                            <p className='slider__text' id='slider-text'>{slider_text}</p>
                            <button className='btn btn--slider slider__btn'>Više</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}