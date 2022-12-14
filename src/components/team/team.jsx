import React, { useEffect } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { TeamCards } from '../teamCards/teamCards';
import { Helmet } from 'react-helmet';

export const Team = () => {
    // VARIABLES
    let team = [
        { name: 'Kristijana Kukić', position: 'Koordinator projekta', img: { large: '/images/team-3.png', medium: '/images/team-3-2.png', small: '/images/team-3-3.png' } },
        { name: 'Dara Beloš', position: 'Pomoćni trener', img: { large: '/images/team-2.png', medium: '/images/team-2-2.png', small: '/images/team-2-3.png' } },
        { name: 'Predrag Beloš', position: 'Asistent', img: { large: '/images/team-1.png', medium: '/images/team-1-2.png', small: '/images/team-1-3.png' } },
    ]

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <main className='team'>
            <Helmet>
                <title>Pravo u metu | tim</title>
                <meta name='description' content='Tim na projektu Pravo u metu radi na svim aktivnostima koje doprinose realizaciji definisanih ciljeva.'></meta>
                <meta property='og:title' content='Pravo u metu | tim' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='Tim na projektu Pravo u metu radi na svim aktivnostima koje doprinose realizaciji definisanih ciljeva.'/>
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
            <Header />
            <section className='wrap container-section page-view team__container'>
                <h1 className='heading-section team__heading'>Naš tim</h1>
                <p className='team__text'>
                    Naš tim koji vredno radi na svim aktivnostima koje doprinose realizaciji definisanih ciljeva
                    i koji je zaslužan sa sve postignute rezultate. Uvek su spremni da porazgovaraju i odgovore
                    na sva pitanja vezana za projekat i aktivnosti koje se realizuju u okviru projekta.
                </p>
                <TeamCards
                    team={team}
                />
            </section>
            <Footer />
        </main>
    )
}