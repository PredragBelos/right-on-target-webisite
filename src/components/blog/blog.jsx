import React, {useEffect} from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';

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
        <section className='blog'>
            <Header />
            <div className='wrap container-section page-view blog__container'>
                <div className='blog__box'>
                    <span>Teme u blog sekciji se pripremaju</span>
                </div>
            </div>
            <Footer />
        </section>
    )
}