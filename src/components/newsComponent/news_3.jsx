import React, { useEffect } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';

export const News3 = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <main className='news-3 overflov-hide'>
            <Helmet>
                <title>Pravo u metu takmičenje u školi Đura Jakšić Kikinda</title>
                <meta name='description' content='Na kraju školske 2021/22 godine održano je takmičenje koje predstavlja jednu od aktivnosti definisanu projektom Pravo u metu. U takmičenju su učestvovali svi učenici koji su pohađali sekciju streličarstva tokom ove školske godine.'></meta>
                <meta property='og:title' content='Pravo u metu takmičenje u školi Đura Jakšić Kikinda' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='Na kraju školske 2021/22 godine održano je takmičenje koje predstavlja jednu od aktivnosti definisanu projektom Pravo u metu. U takmičenju su učestvovali svi učenici koji su pohađali sekciju streličarstva tokom ove školske godine.' />
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
            <Header />
            <div className='wrap container-section page-view news-3__container'>
                <h1 className='heading-section news-3__heading'>Održano takmičenje na kraju školske godine</h1>
                <div className='container-news-content news-3__content'>
                    <picture className='news-3__picture'>
                        <source media='(max-width:576px)' srcSet='/images/newsDetails/news_det_3_3.jpg' />
                        <source media='(max-width:768px)' srcSet='/images/newsDetails/news_det_3_2.jpg' />
                        <img className='news-3__img' src='/images/newsDetails/news_det_3_1.jpg' alt='Takmičenje na kraju godine pobednici' />
                    </picture>
                    <p className='news-3__text'>
                        Na kraju školske 2021/22 godine održano je takmičenje koje predstavlja jednu od
                        aktivnosti definisanu samim projektom. U takmičenju su učestvovali svi učenici koji
                        su pohađali sekciju streličarstva tokom ove školske godine.
                    </p>
                    <p className='news-3__text'>
                        Takmičenje je organizovano za dve grupe učenika i to za učenike petog i šestog razreda,
                        kao i za učenike sedmog i osmog razreda. Ove godine sekciju je pohađao i jedan učenik čatvrtog
                        razreda koji je takođe učestvovao u takmičenju. Na početku takmičenja učenici su prošli proces
                        zagrevanja i nekoliko krugova pucanja kako bi se pripremili za takmičarski deo.
                    </p>
                    <p className='news-3__text'>
                        U takmičarskom delu svaki od učenika imao je priliku da gađa tri puta, pri čemu je svaki put pucao
                        tri strele. Za svakog učenika sabirali su se bodovi koje je osvojio u sva tri gađanja i oni su se
                        uzimali u obzir prilikom samog rangiranja. Rangiranje se vršilo za svaku od grupa tako da su na kraju
                        prozvani učenici koji su osvojili prvo, drugo i treće mesto u svakoj od grupa, kao i učenik koji je
                        osvojio najviše bodova od svih levorukih učesnika.
                    </p>
                    <p className='news-3__text'>
                        Učenicima koji su osvojili jedno od prva tri mesta dodeljena je diploma i medalja za osvojen uspeh na
                        takmičenju, a dodela diploma i medalja protekla je uz govor nastavnica koje su se na kraju zahvalile
                        svim učenicima koji su ove godine pohađali sekciju. Učenici su bili pozitivno iznenađeni ovim
                        događajem, pa su tokom takmičenja pokazali sportski duh i želju da se svrstaju među jedno od tri najbolja mesta.
                    </p>
                    <p className='news-3__text'>
                        Ovim takmičenjem završena je i prva faza projekta, a nastavak sekcije očekuje se u septembru 2022. godine.
                    </p>
                    <p className='news-3__text'>
                        Datum objave: 08.06.2021.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}