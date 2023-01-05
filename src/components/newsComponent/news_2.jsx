import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';

export const News2 = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='news-2'>
            <Header />
            <div className='wrap container-section page-view news-2__container'>
                <h1 className='heading-section news-2__heading'>Nabavljena sva neophodna oprema</h1>
                <div className='container-news-content news-2__content'>
                    <picture className='news-1__picture'>
                        <source media='(max-width:576px)' srcSet='/images/newsDetails/news_det_2_3.jpg' />
                        <source media='(max-width:768px)' srcSet='/images/newsDetails/news_det_2_2.jpg' />
                        <img className='news-2__img' src='/images/newsDetails/news_det_2_1.jpg' alt='Oprema za streličarstvo' />
                    </picture>
                    <p className='news-2__text'>
                        Na osnovu projekta koji je finansirala Pokrajinska vlada nabavljena je
                        sva oprema koja je neophodna za održavanje sekcije streličarstva.
                    </p>
                    <p className='news-2__text'>
                        Nabavljeni su lukovi koji imaju različitu snagu kako bi mogli da ih koriste
                        učenici u skladu sa svojim fizičkim sposobnostima. Pored različitih snaga
                        nabavljeni su i lukovi za levoruke osobe tako da se i levoruki učenici mogu
                        uključiti u sekciju.
                    </p>
                    <p className='news-2__text'>
                        Nabavljene su i tetive, tabovi, zaštite za ruke, zaštitna mreža, strele,
                        stringer i  stalci za lukove kako bi se učenici u potpunosti opremili za
                        ispravno i bezbedno gađanje. Obezbedili smo strele u dve dužine kako bi
                        učenici mogli da postignu najbolje rezultate.
                    </p>
                    <p className='news-2__text'>
                        Pored lukova i prateće opreme obezbedili smo polifon i nekoliko različitih
                        lica meta. Sredstva su uložena i u izradu držača polifona, tako da smo uspeli
                        da uz lično angažovanje izradimo više stalaka.
                    </p>
                    <p className='news-2__text'>
                        Sva oprema nabavljena je kod dobavljača Strela Archery Shop koji je bio u
                        mogućnosti da nam ponudi svu neophodnu opremu po prihvatljivim uslovima i rokom
                        isporuke.
                    </p>
                    <p className='news-2__text'>
                        Datum objave: 05.09.2021.
                    </p>
                </div>
            </div>
            <Footer />
        </section>
    )
}