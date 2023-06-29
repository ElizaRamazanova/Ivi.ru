import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MovieType } from '../../shared/models/index.js'
import React from 'react';

type Props = {
    movie: MovieType,
    onClickLocal?: (() => void) | any
    favorites?: MovieType[] | undefined,
    boolean?: boolean,
}

const Card = ({ movie, onClickLocal, favorites, boolean }: Props) => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div key={movie.id}>
            <Link
                to={`/details/${movie.id}`}
                style={{
                    width: 'auto',
                }}
            >
                <img className='recommendStyles__posterImage ' src={movie?.poster?.previewUrl} alt={movie.title} />
                <div className='recommendStyles__movie-title'>{movie.name}</div>
            </Link>
            {currentPath === '/favoriteMovies' || boolean ?
                null
                :
                <button
                    className='recommendStyles__favorite-btn'
                    onClick={() => onClickLocal()}
                >
                    {favorites?.some((favMovie) => favMovie.id === movie.id) ? 'Удалить из избранного' : 'В избранное'}
                </button>
            }
        </div>
    );
};

export default Card;