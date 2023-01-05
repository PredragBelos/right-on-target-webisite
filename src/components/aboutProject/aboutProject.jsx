import React from 'react';

export const AboutProject = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='abproj'>
            <div className='wrap container-section abproj__container'>
                <h2 className='abproj__heading'>O projektu</h2>
                <div className='abproj__content'>
                    <div className='abproj__left'>
                        <h4 className='abproj__title--name'>
                            Naziv projekta: <span className='h4 abproj__title--white'>Pravo u metu</span>
                        </h4>
                        <div className='container-text abproj__container__text'>
                            <h4 className='abproj__title'>Opis projekta</h4>
                            <p className='abproj__text'>
                                Projekat predstavlja  sekciju streličarstva kao deo školskih aktivnosti u okviru
                                osnovne škole 'Đura Jakšić' iz Kikinde. Osnovna ideja je bila da se deci pruži mogućnost
                                za bavljenjem streličarstvom, kao specifičnim sportom, koji kod dece gradi pozitivne osobine
                                kao što su poštovanje, uvažavanje tuđih stavova, smirenost, strpljenje, pedantnost, pružanje
                                podrške i drugih osobina.
                            </p>
                            <p className='abproj__text'>
                                Projekat se odvija u više faza od kojih svaka traje jednu školsku godinu. Prva faza je započeta
                                2021. godine, a projekat je finansirala Pokrajinska vlada. Tokom ove faze nabavljena je neophodna
                                oprema za odvijanje sekcije, kreirana metodologija rada i održano preko 70 časova sekcije tokom
                                kojih su se učenici upoznali sa opremom, samom tehnikom i uvežbali gađanje.
                            </p>
                            <p className='abproj__text'>
                                Učenici su podeljeni u više grupa na osnovu uzrasta i fizičkih sposobnosti tako da svi učenici mogu
                                da upotrebljavaju opremu koja odgovara njihovim sposobnostima.
                            </p>
                            <p className='abproj__text'>
                                Na kraju školske godine održava se takmičenje na kome učenici moglu da pokažu šta su naučili tokom
                                obuke koje je propraćeno dodelom diploma i medalja. Na kraju dosadašnjih faza projekta učenici su bili zadovoljni,
                                jer su stekli jedno novo iskustvo i proveli kvalitetno vreme vežbajući i družeći se sa svojim drugovima i drugaricama
                                iz škole.
                            </p>
                        </div>
                    </div>
                    <picture className='abproj__right'>
                        <source media='(max-width:992px)' srcSet='/images/abproject-2.jpg'></source>
                        <img src='/images/abproject-1.jpg' alt='Project writer' className='abproj__img' />
                    </picture>
                </div>
            </div>
        </section>
    )
}