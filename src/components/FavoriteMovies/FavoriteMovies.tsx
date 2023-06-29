import React from 'react';
import './FavoriteMovies.scss'
import Card from '../Card/Card.tsx';

const FavoriteMovies = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

    return (
        <div className='favoriteMovies'>
            <div className='conatainer'>
                <div className='favoriteMovies__mainTaxtwrap'>
                    <h2 className='favoriteMovies__maintext'>Избранные фильмы</h2>
                </div>

                <div className='favoriteMovies__wrap'>
                    {storedFavorites.map((movieId) => (
                        <Card movie={movieId} />
                    ))}
                </div>

            </div>
        </div>
    );
};


export default FavoriteMovies;
