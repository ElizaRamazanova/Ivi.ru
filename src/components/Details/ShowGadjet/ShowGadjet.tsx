import React from 'react';
import './ShowGadjet.scss'
import nevski from '../../../assets/images/nevskiImage.png.svg'

const ShowGadjet = () => {
    return (
        <div className='ShowGadjet'>
            <div className='ShowGadjet__text'>
                <p className='ShowGadjet__text_main'>Cмотреть «Невский» на всех устройствах</p>
                <p className='ShowGadjet__text_description'>Приложение доступно для скачивания на iOS, Android, SmartTV и
                    приставках</p>
                <button className='ShowGadjet__text_button'>Подключить устройства</button>
            </div>
            <div className='ShowGadjet__image'>
                <img src={nevski} alt="image" />
            </div>
            <div className='ShowGadjet__text_all'>
                <p className='ShowGadjet__text_ivi'>Мой Иви</p>
                <p className='ShowGadjet__text_ivi'>Сериалы</p>
                <p className='ShowGadjet__text_ivi'>Драмы</p>
                <p className='ShowGadjet__text_ivi'>Невский</p>
            </div>

        </div>
    );
};

export default ShowGadjet;