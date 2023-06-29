import React from 'react'
import './ActorsStyles.scss'
import { MovieId, MovieResp } from '../../../shared/models/index'
type Props = {
    actorsToDisplay: MovieId[] | any,
    showAllActors: boolean,
    movieData: MovieResp | undefined,
    onClickShow: () => void,
}


const ActorsStyles = ({ actorsToDisplay, showAllActors, movieData, onClickShow }: Props) => {

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
