import React from 'react';
import { Header } from '../../header/Header';
import { Footer } from '../../footer/footer';

export const News1 = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='news-1'>
            <Header />
            <div className='wrap container-section page-view news-1__container'>
                <h1 className='news-1__heading'>Početak rada sekcije</h1>
                <div className='news-1__content'>
                    <div className='news-1__left'>
                        <p className='news-1__text'>
                            Početkom školske 2021/22 godine sekcija streličarstva u okviru projekta
                            “Pravo u metu” uvrštena je u deo školskih aktivnosti osnovne škole Đura
                            Jakšić iz Kikinde. Obaveštavanje učenika izvršeno je putem promotivnhih
                            plakata, obaveštavanjem od strane razrednih starešina i samih nastavnica
                            koje sprovode obuku dece.
                        </p>
                        <p className='news-1__text'>
                            Prijavio se veliki broj učenika, kako dečaka tako i devojčica što pokazuje
                            da je zainteresovanje za ovim sportom veliko.
                        </p>
                        <p className='news-1__text'>
                            Sekcija streličarstva će se organizovati u dve grupe kako bi učenici mogli
                            da koriste opremu u skladu sa svojim fizičkim sposobnostima i na taj način
                            postignu najbolje rezultate.
                        </p>
                        <p className='news-1__text'>
                            Svake radne nedelje sekcija će se održavati u dva termina u fiskulturnoj sali 
                            osnovne škole Đura Jakšić iz Kikinde kako bi se održao predviđen broj časova 
                            na kojima će učenici moći da steknu znanje i usavrše veštinu gađanja.
                        </p>
                        <p className='news-1__text'>
                            Datum objave: 01.09.2021.
                        </p>
                    </div>
                    <picture className='news-1__right'>
                        <source media='(max-width:576px)' srcSet='/images/newsDetails/news_det_1_3.jpg' />
                        <source media='(max-width:768px)' srcSet='/images/newsDetails/news_det_1_2.jpg' />
                        <img className='news-1__img' src='/images/newsDetails/news_det_1.jpg' alt='Pravo u metu plakat' />
                    </picture>
                </div>
            </div>
            <Footer />
        </section>
    )
}