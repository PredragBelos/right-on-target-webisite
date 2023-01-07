import React, { useEffect } from "react";
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';

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
        <section className='news-'>
            <Header />
            <div className='wrap container-section page-view news-__container'>
                <h1 className='heading-section news-__heading'>Naslov vesti</h1>
                <div className='container-news-content news-__content'>

                </div>
            </div>
            <Footer />
        </section>
    )
}