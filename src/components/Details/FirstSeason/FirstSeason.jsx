import React from 'react';
import './FirstSeason.scss'

const FirstSeason = () => {
    return (
        <div className='firstSeason'>
            <p className='firstSeason__main'>Знаете ли вы, что</p>
            <p className='firstSeason__description'>Съемки первого сезона сериала «Невский» про справедливого детектива Павла
                Семёнова проходили в Санкт-Петербурге в 2014 году.</p>
            <button className='firstSeason__button'>Читать дальше</button>
        </div>
    );
};

export default FirstSeason;