import React from 'react';
import { Link } from 'react-router-dom';
import { setTitle } from '../../js/functions/newsCardFunctions';

export const NewsCard = ({ news_id, title, date, image }) => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------
    
    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <div className='news-card'>
            <div className='news-card__top'>
                <div className='news-card__date'>
                    <span>{date}</span>
                </div>
                <picture>
                    <source media='(max-width:576px)' srcSet={`${image.small}`} />
                    <source media='(max-width:768px)' srcSet={`${image.medium}`} />
                    <img src={`${image.large}`} alt='' className='news-card__img' />
                </picture>
            </div>
            <div className='news-card__bottom'>
                <Link to={`/news/${news_id}`} className='news-card__link'>{setTitle(title)}</Link>
            </div>
        </div>
    )
}