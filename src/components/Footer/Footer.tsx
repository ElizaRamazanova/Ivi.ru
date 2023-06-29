import React from 'react';
import appStore from '../../assets/icons/apple.svg'
import googlePlay from '../../assets/icons/google.svg'
import smartTv from '../../assets/icons/smarttv.svg'
import allApps from '../../assets/icons/all.svg'
import vk from '../../assets/icons/vk.svg'
import ok from '../../assets/icons/ok.svg'
import twitter from '../../assets/icons/twitter.svg'
import phone from '../../assets/icons/phone.svg'
import lin from '../../assets/icons/in.svg'
import telegramm from '../../assets/icons/telegramm.svg'
import './Footer.scss'


const Footer = () => {
    return (
        <div className='Footerbox'>
            <div className="container">
                <div className="Footerbox__content">
                    <div className='Apps'>
                        <div className='Apps__appStore'>
                            <div className='Apps__images'>
                                <img className='Apps__appIcon' src={appStore} alt="icon" /></div>
                            <div className='Apps__allTextsStyles'><p className='Apps__text'>Загрузить в</p>
                                <p className='Apps__appText'>App Store</p></div>

                        </div>
                        <div className='Apps__appStore'>
                            <div className='Apps__images'>
                                <img className='Apps__googleIcon' src={googlePlay} alt="icon" /></div>
                            <div className='Apps__allTextsStyles'> <p className='Apps__text'>Доступно в</p>
                                <p className='Apps__appText'>Google Play</p>
                            </div>

                        </div>
                        <div className='Apps__appStore'>
                            <div className='Apps__images'>
                                <img className='Apps__smartIcon' src={smartTv} alt="icon" /></div>
                            <div className='Apps__allTextsStyles'> <p className='Apps__text'>Смотрите на</p>
                                <p className='Apps__appText'>Smart TV</p>
                            </div>

                        </div>
                        <div className='Apps__appStore'>
                            <div className='Apps__images' >
                                <img className='Apps__allIcon' src={allApps} alt="icon" /></div>
                            <div className='Apps__allTextsStyles' > <p className='Apps__textAll'>Все устройства</p></div>


                        </div>
                    </div>
                    <div className='AllIcons'>
                        <div className='AllIcons__stylesIcon'><img src={vk} alt="icon" /> </div>
                        <div className='AllIcons__stylesIcon'><img src={ok} alt="icon" /></div>
                        <div className='AllIcons__stylesIcon'> <img src={twitter} alt="icon" /></div>
                        <div className='AllIcons__stylesIcon'><img src={phone} alt="icon" /></div>
                        <div className='AllIcons__stylesIcon'> <img src={lin} alt="icon" /></div>
                        <div className='AllIcons__stylesIcon'>  <img src={telegramm} alt="icon" /></div>



                    </div>
                </div>
                <div className='textEnd'>
                    <p >© 2023 ООО «Иви.ру» </p>
                    <p > HBO ® and related service marks are the property of Home Box Office, Inc</p></div>

            </div>


        </div>

    );
};

export default Footer;