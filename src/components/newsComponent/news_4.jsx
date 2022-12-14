import React, { useEffect } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';

export const News4 = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <main className='news-4 overflov-hide'>
            <Helmet>
                <title>Pravo u metu ponovo deo školskih aktivnosti</title>
                <meta name='description' content='Streličarstvo će i tokom školske 2022/23 godine biti deo školskih aktivnosti osnovne škole Đura jakšić Kikinda.'></meta>
                <meta property='og:title' content='Pravo u metu ponovo deo školskih aktivnosti' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='Streličarstvo će i tokom školske 2022/23 godine biti deo školskih aktivnosti osnovne škole Đura jakšić Kikinda.' />
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
            <Header />
            <div className='wrap container-section page-view news-4__container'>
                <h1 className='heading-section news-4__heading'>Streličarstvo ponovo deo školskih aktivnosti</h1>
                <div className='container-news-content news-4__content'>
                    <picture className='news-4__picture'>
                        <source media='(max-width:576px)' srcSet='/images/newsDetails/news_det_4_3.jpg' />
                        <source media='(max-width:768px)' srcSet='/images/newsDetails/news_det_4_2.jpg' />
                        <img className='news-4__img' src='/images/newsDetails/news_det_4_1.jpg' alt='Pravo u metu plakat 2022/23' />
                    </picture>
                    <p className='news-4__text'>
                        Streličarstvo će i tokom školske 2022/23 godine biti deo školskih aktivnosti osnovne škole Đura jakšić Kikinda. 
                        Učenici se za sekciju mogu prijaviti kod nastavnoca Kristijane Kukić i Dare Beloš.
                    </p>
                    <p className='news-4__text'>
                        Termin održavanja sekcije je svake radne srede u 18:15. Ukoliko bude bilo izmena u terminu učenici će biti
                        blagovremeno obavešteni.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}