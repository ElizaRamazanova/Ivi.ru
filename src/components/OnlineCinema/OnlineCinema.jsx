import React from 'react';
import './OnlineCinema.scss'

const OnlineCinema = () => {
    return (
        <div className='wrapper'>
            <div className='onlineCinema'>
                <div className='onlineCinema__block'>
                    <h4 className='onlineCinema__online'>Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда
                        приносят настоящее удовольствие</h4>
                    <p className='onlineCinema__showFilm'> Случалось ли вам отказаться от просмотра интересного фильма из-за того,
                        что его показывали в неудобное время?
                        Приходилось ли искать в сети интернет,
                        где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для</p>
                    <button className='onlineCinema__return'>Развернуть</button>
                </div>
            </div>
        </div>
    );
};

export default OnlineCinema;