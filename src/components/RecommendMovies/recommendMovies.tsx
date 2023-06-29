import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import vector from '../../assets/icons/vector.png';
import './RecommendMoviesStyle.scss';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.tsx';
import { MovieDataDocs, MovieType } from '../../shared/models';

interface Props {
    title: string,
    data: MovieType[] | undefined
}

const RecommendMovies = ({ title, data }: Props) => {

    const [favorites, setFavorites] = useState<any>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
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
                    {data?.map((movie) => (
                        <Card movie={movie} favorites={favorites} onClickLocal={() => addToFavorites(movie)} />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default RecommendMovies;


