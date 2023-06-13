import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import vector from '../../assets/icons/Vector.png';
import './RecommendMoviesStyle.scss';
import { Link } from 'react-router-dom';


const RecommendMovies = ({ title, data }) => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);

    const addToFavorites = (movie) => {
        if (favorites.some((favMovie) => favMovie.id === movie.id)) {
            const updatedFavorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...favorites, movie];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    return (
        <div className='wrapper'>
            <div className='recommendStyles'>
                <button className='recommendStyles__posterText'>
                    {title} <img src={vector} alt='icon' />
                </button>
                <button className='recommendStyles__favorite-btn'>
                    <Link to='/favoriteMovies'>Все избранные</Link>
                </button>
                <div className='recommendStyles__block'>
                    {data?.docs?.map((movie) => (
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
                            <button
                                className='recommendStyles__favorite-btn'
                                onClick={() => addToFavorites(movie)}
                            >
                                {favorites.some((favMovie) => favMovie.id === movie.id) ? 'Удалить из избранного' : 'В избранное'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default RecommendMovies;


