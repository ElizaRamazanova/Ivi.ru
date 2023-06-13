import React from 'react';
import imagelight from '../assets/icons/lightning.svg.png'
import './freeTextStyle.scss'

const freeText = () => {
    return (
        <div className="container" >
            <p><img src={imagelight} alt="icon" />30 дней подписки бесплатно</p>
        </div>
    );
};

export default freeText; 