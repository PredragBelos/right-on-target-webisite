import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';

export const Contact = () => {

    // STATE ----------------------------------------------------------------------

    // LIFECICLE ------------------------------------------------------------------

    // FUNCTIONS ------------------------------------------------------------------ 

    // RENDER ---------------------------------------------------------------------
    return (
        <section className='contact'>
            <Header />
            <div className='wrap container-section page-view contact__container'>
                <div className='contact__left-top'>
                    <h3 className='contact__heading'>Nosilac projekta</h3>
                    <span className='contact__text'>OŠ 'Đura Jakšić' Kikinda</span>
                    <span className='contact__text'>Svetozara Miletića 16</span>
                    <span className='contact__text'>23300 Kikinda</span>
                    <span className='contact__text'>MB: 08020795</span>
                    <span className='contact__text'>PIB: 101081913</span>
                </div>
                <div className='contact__left-bottom'>
                    <h4 className='contact__title'>Za sva pitanja popunite našu kontakt formu</h4>
                    <form className='form contact__form'>
                        <label className='label-1 contact__label' htmlFor='contact-name' >Ime i prezime</label>
                        <input className='input-1 contact__input' type='text' id='contact-name' autoComplete='off' />
                        <label className='label-1 contact__label' htmlFor='contact-email'>E-mail</label>
                        <input className='input-1 contact__input' type='email' id='contact-email' autoComplete='off' />
                        <label className='label-1 contact__label' htmlFor='contact-text'>Tekst poruke</label>
                        <textarea className='textarea-1 contact__textarea' id='contact-text' spellCheck='false'></textarea>
                        <input className='btn btn--form-1 contact__submit' type='submit' value='Pošalji' />
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    )
}