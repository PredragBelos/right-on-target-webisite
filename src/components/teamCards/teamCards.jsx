import React from 'react';

export const TeamCards = ({ team }) => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <div className='team__cards'>
            <div className='team__cards-box'>
                {
                    team.map((member, index) => {
                        return (
                            <article className='team-card' key={index}>
                                <div className='team-card__top'>
                                    <picture>
                                        <source media='(max-width:576px)' srcSet={`${member.img.small}`} />
                                        <source media='(max-width:768px)' srcSet={`${member.img.medium}`} />
                                        <img className='team-card__img' src={member.img.large} alt={`${member.name} profilna fotografija`} />
                                    </picture>
                                </div>
                                <div className='team-card__bottom'>
                                    <span className='team-card__name'>{member.name}</span>
                                    <span className='team-card__position'>{member.position}</span>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}