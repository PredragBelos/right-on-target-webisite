import React, { useEffect } from "react";
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';

export const TemplateName = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <main className='news-'>
            <Helmet>
                <title>Pravo u metu | o projektu</title>
                <meta name='description' content='Projekat Pravo u metu predstavlja sekciju streličarstva u okviru osnovne škole Đura Jakšić iz Kikinde. Sekcija je namenjena učenicima uzrasta od petog do osmog razreda. Osnovna ideja je bila pružanje mogućnosti učenicima da se bave streličarstvom kao specifičnim sportom u okviru školskih aktivnosti.'></meta>
                <meta property='og:title' content='Pravo u metu | o projektu' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='Projekat Pravo u metu predstavlja sekciju streličarstva u okviru osnovne škole Đura Jakšić iz Kikinde. Sekcija je namenjena učenicima uzrasta od petog do osmog razreda. Osnovna ideja je bila pružanje mogućnosti učenicima da se bave streličarstvom kao specifičnim sportom u okviru školskih aktivnosti.' />
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
            <Header />
            <div className='wrap container-section page-view news-__container'>
                <h1 className='heading-section news-__heading'>Naslov vesti</h1>
                <div className='container-news-content news-__content'>

                </div>
            </div>
            <Footer />
        </main>
    )
}