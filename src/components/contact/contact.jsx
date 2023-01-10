import React, { useRef, useState, useEffect } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import emailjs from '@emailjs/browser';
import { EmailPopup } from '../emailPopup/emailPopup';
import { Helmet } from 'react-helmet';

export const Contact = () => {
    const form = useRef();
    // STATE ----------------------------------------------------------------------
    const [popup_vis, set_popup_vis] = useState('hide');
    const [popup_txt, set_popup_txt] = useState('');

    // LIFECICLE ------------------------------------------------------------------

    // Scrool on top of page after refresh page
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    // FUNCTIONS ------------------------------------------------------------------

    /* Function for sending email to project mail address */
    const sendEmail = (e) => {
        e.preventDefault();
        set_popup_vis('');
        set_popup_txt('Poruka se šalje...');

        emailjs.sendForm('service_jbh89sc', 'template_06731n8', form.current, 'ZXJBguFhcKcPEUkWp')
            .then((result) => {
                if (result.text === 'OK') {
                    set_popup_txt('Poruka je poslata');
                    cleanInputs();
                }
            }, (error) => { set_popup_txt('Greška pri slanju poruke'); });
    };

    /* Callback function for setting popup visibility */
    const setPopupVisibilityCf = (popup_vis) => {
        set_popup_vis(popup_vis);
    }

    /* Function for cleneng inputs */
    const cleanInputs = () => {
        let inputs = document.querySelectorAll('.cleen_input');
        inputs.forEach(input => { input.value = '' })
    }

    // RENDER ---------------------------------------------------------------------
    return (
        <main className='contact'>
            <Helmet>
                <title>Pravo u metu | kontakt</title>
                <meta name='description' content='Kontakt forma za slanje elektronskih poruka timu na projektu Pravo u metu.'></meta>
                <meta property='og:title' content='Pravo u metu | kontakt' />
                <meta property='og:type' content='website' />
                <meta property='og:description' content='Kontakt forma za slanje elektronskih poruka timu na projektu Pravo u metu.' />
                <link rel='canonical' href='https://pravoumetu.rs'></link>
            </Helmet>
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
                    <form className='form contact__form' ref={form} onSubmit={sendEmail}>
                        <label className='label-1 contact__label' htmlFor='contact-name' >Ime i prezime</label>
                        <input className='input-1 contact__input cleen_input' type='text' name='user_name' id='contact-name' autoComplete='off' required />
                        <label className='label-1 contact__label' htmlFor='contact-email'>E-mail</label>
                        <input className='input-1 contact__input cleen_input' type='email' name='user_email' id='contact-email' autoComplete='off' required />
                        <label className='label-1 contact__label' htmlFor='contact-text'>Tekst poruke</label>
                        <textarea className='textarea-1 schroollbar-1 contact__textarea cleen_input' name='message' id='contact-text' spellCheck='false' required></textarea>
                        <input className='btn btn--form-1 contact__submit' type='submit' value='Pošalji' />
                    </form>
                </div>
            </div>
            <EmailPopup
                visibility={popup_vis}
                setVisibility={setPopupVisibilityCf}
                text={popup_txt}
            />
            <Footer />
        </main>
    )
}