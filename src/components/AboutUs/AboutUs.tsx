import React from 'react';
import './AboutUsStyle.scss'
import sms from '../../assets/icons/sms.png'
import phone from '../../assets/icons/phone.png'
import iconFilm from '../../assets/icons/iconFilm.svg'
import { listTwo } from '../../api/data';



const AboutUs = () => {
    return (
        <div className='wrapper'>
            <div className='grid-container'>
                <div className='aboutUs'>
                    <h5 className='aboutUs__about'>О нас</h5>
                    <ul className='aboutUs__list'>
                        <li>О компании</li>
                        <li>Вакансии</li>
                        <li>Программа бета-тестирования</li>
                        <li>Информация для партнёров</li>
                        <li>Размещение рекламы</li>
                        <li>Пользовательское соглашение</li>
                        <li>Политика конфиденциальности</li>
                        <li>Комплаенс</li>
                    </ul>
                </div>
                <div className='aboutUs'>
                    <h5 className='aboutUs__about'>Разделы</h5>
                    <ul className='aboutUs__list'>
                        {listTwo?.map((item) =>
                            <li key={item.id}>{item.value}</li>
                        )}
                    </ul>
                </div>
                <div className='aboutUs'>
                    <h5 className='aboutUs__about'>Служба поддержки</h5>
                    <ul className='aboutUs__list'>
                        <li>Мы всегда готовы вам помочь</li>
                        <li>Наши операторы онлайн 24/7</li>
                    </ul>
                    <button className='aboutUs__button'>Написать в чате</button>
                    <div className='aboutUs__twoIcons'>
                        <a className='aboutUs__mail' href="mailto:"> <img className='aboutUs__iconsms' src={sms} alt="icon" /></a>
                        <a className='aboutUs__telefon' href="tel:+"> <img className='aboutUs__iconphone' src={phone} alt="icon" /></a>
                    </div>
                    <a className='aboutUs__site' href="ask.ivi.ru">ask.ivi.ru</a>
                    <p className='aboutUs__answer' >Ответы на вопросы</p>
                </div>
                <div className='aboutUs dsad'>
                    <img className='aboutUs__iconFilms' src={iconFilm} alt="" />
                    <p className='aboutUs__text'>Смотрите фильмы, сериалы и
                        мультфильмы без рекламы</p>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;