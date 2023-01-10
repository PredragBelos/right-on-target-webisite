import React, { useEffect } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';

export const Blog = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <main className='blog'>
            <Helmet>
                <title>Pravo u metu | blog</title>
                <meta name='description' content='U okviru projekta pravo u metu obrađuju se teme koje pomažu učenicima da razumeju osnovne koncepte i pravce u streličarstvu. Teme koje su objavljene u blog sekciji pomažu u razvoju pozitivnih stavova kod učenika.'></meta>
                <meta property='og:title' content='Pravo u metu | blog' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='U okviru projekta pravo u metu obrađuju se teme koje pomažu učenicima da razumeju osnovne koncepte i pravce u streličarstvu. Teme koje su objavljene u blog sekciji pomažu u razvoju pozitivnih stavova kod učenika.' />
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
            <Header />
            <div className='wrap container-section page-view blog__container'>
                <div className='blog__box'>
                    <span>Teme u blog sekciji se pripremaju</span>
                </div>
            </div>
            <Footer />
        </main>
    )
}