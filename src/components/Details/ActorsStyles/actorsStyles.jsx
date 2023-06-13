import React from 'react'
import './ActorsStyles.scss'

const ActorsStyles = ({ actorsToDisplay, showAllActors, movieData, onClickShow }) => {
    return (
        <div className="actorsStyles">
            <p className="actorsStyles__text">Актёры и создатели</p>
            <div className="actorsStyles__allView" >
                <div className="actorsStyles__view">
                    {actorsToDisplay && actorsToDisplay.map(person => (
                        <div key={person.id}>
                            <img className="actorsStyles__photo" src={person.photo} alt={person.name} />
                            <p className="actorsStyles__name">{person.name}</p>
                        </div>
                    ))}
                    {!showAllActors && movieData?.persons.length > 10 && (
                        <button className="actorsStyles__button" onClick={onClickShow}>Еще</button>
                    )}
                    {showAllActors && movieData?.persons.length > 10 && (
                        <button className="actorsStyles__button" onClick={onClickShow}>Скрыть</button>
                    )}
                </div>

            </div>

        </div>
    );
};

export default ActorsStyles;
