import React from 'react';
import './Dropdown.scss'
const genres = [
    'Артхаус',
    'Биография',
    'Боевики',
    'Вестерн',
    'Военные',
    'Детективы',
    'Для всей семьи',
    'Для детей',
    'Документальные',
    'Драмы',
    'Исторические',
    'Катастрофы',
    'Комедии',
    'Криминал',
    'Мелодрамы',
    'Мистические',
    'Приключения',
    'Спорт',
    'Триллеры',
    'Ужасы',
    'Фантастика',
    'Фэнтези',
];

const countries = [
    'Русские',
    'Зарубежные',
    'Советское кино',
];

const raiting = [
    'Подборки',
    'Иви Рейтинг',
    'Трейлеры',
    'Что посмортеть',
    'Фильмы в HD',
    'Новинки подписки',

];


const Dropdown = () => {

    const renderColumns = (items) => {
        return (
            <div className="columns">
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        );
    };

    return (
        <div className="movie-genres-and-countries">
            <h2 >Жанры</h2>
            {renderColumns(genres)}

            <h2>Страны</h2>
            {renderColumns(countries)}

            <h2>Новинки</h2>
            {renderColumns(raiting)}

        </div>
    );
};


export default Dropdown;