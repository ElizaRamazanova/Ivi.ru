import React from 'react';
import './FavoriteMovies.scss'

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
                        <div key={movieId.id}>
                            <img className='favoriteMovies__image' src={movieId?.poster?.previewUrl} alt={movieId.title} />
                            <p className='favoriteMovies__title'>{movieId.alternativeName}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};


export default FavoriteMovies;
