import React from 'react';
import './Recenzion.scss'

const Recenzion = () => {
    return (
        <div className='recenzion'>
            <div className='recenzion__feedback'>
                <div className='recenzion__feedback__text'>
                    <div className='recenzion__feedback__text_position'>
                        <p className='recenzion__feedback__text_main'>Рецензии</p>
                        <p className='recenzion__feedback__text_count'>2</p>
                    </div>

                </div>
                <div className='recenzion__feedback__button'>
                    <button className='recenzion__feedback__button_style'>Написать рецензию</button>
                </div>
            </div>
            <div className='recenzion__allStyles'>
                <div className='recenzion__styles' >
                    <p className='recenzion__styles_author'>luciebronchart74</p>
                    <p className='recenzion__styles_title_serial'>Очередной сериал про бандитов и ментов
                        Петербурга </p>
                    <p className='recenzion__styles_description'> Решил посмотреть очередной сериал про бандитский Петербург, которых
                        уже снято превеликое множество. «Невский» почти ничем не выделяется
                        из всего многообразия, но при этом качественная игра актеров и хорошо</p>
                    <p className='recenzion__styles_date'> 18 апреля 2023</p>
                </div>
                <div className='recenzion__styles' >
                    <p className='recenzion__styles_author'>luciebronchart74</p>
                    <p className='recenzion__styles_title_serial'>Очередной сериал про бандитов и ментов
                        Петербурга </p>
                    <p className='recenzion__styles_description'> Решил посмотреть очередной сериал про бандитский Петербург, которых
                        уже снято превеликое множество. «Невский» почти ничем не выделяется
                        из всего многообразия, но при этом качественная игра актеров и хорошо</p>
                    <p className='recenzion__styles_date'> 18 апреля 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Recenzion;