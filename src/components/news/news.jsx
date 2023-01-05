import React, {useEffect} from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { news_arr } from '../../js/data/news';
import { NewsCard } from '../newsCard/newsCard';

export const News = () => {
    let sorted_news = news_arr.sort((a, b) => { return b.news_id - a.news_id });

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------
    
    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='news'>
            <Header />
            <div className='wrap container-section page-view news__container'>
                <h1 className='heading-section news__heading'>Vesti</h1>
                <div className='news__cards'>
                    {
                        sorted_news.map(news => {
                            return (
                                <NewsCard
                                    key={news.news_id}
                                    news_id={news.news_id}
                                    title={news.title}
                                    date={news.date}
                                    image={news.img}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </section>
    )
}