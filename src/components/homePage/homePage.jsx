import React, { useEffect } from 'react';
import { slider_data } from '../../js/data/sliderData';
import { AboutProject } from '../aboutProject/aboutProject';
import { Goals } from '../goals/goals';
import { Header } from '../header/Header';
import { Partners } from '../partners/partners';
import { Results } from '../results/results';
import { Slider } from '../slider/slider';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';

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
        <main className='home'>
            <Helmet>
                <title>Pravo u metu | o projektu</title>
                <meta name='description' content='Projekat Pravo u metu predstavlja sekciju streličarstva u okviru osnovne škole Đura Jakšić iz Kikinde. Sekcija je namenjena učenicima uzrasta od petog do osmog razreda. Osnovna ideja je bila pružanje mogućnosti učenicima da se bave streličarstvom kao specifičnim sportom u okviru školskih aktivnosti.'></meta>
                <meta property='og:title' content='Pravo u metu | o projektu' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='Projekat Pravo u metu predstavlja sekciju streličarstva u okviru osnovne škole Đura Jakšić iz Kikinde. Sekcija je namenjena učenicima uzrasta od petog do osmog razreda. Osnovna ideja je bila pružanje mogućnosti učenicima da se bave streličarstvom kao specifičnim sportom u okviru školskih aktivnosti.' />
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
            <Header />
            <Slider
                slider_data={slider_data}
                slider_interval={15000}
            />
            <AboutProject />
            <Goals />
            <Results />
            <Partners />
            <Footer />
        </main>
    )
}