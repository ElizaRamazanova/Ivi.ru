import React from 'react';
import MySwiper from '../../components/Swiper/MySwiper';
import RecommendMovies from '../../components/RecommendMovies/recommendMovies';
import { useGetAllTypesQuery, useGetMovieIdQuery, useGetPopularMoviesQuery } from '../../Store/Services/getAllMovie';
import OnlineCinema from '../../components/OnlineCinema/OnlineCinema';
import AboutUs from '../../components/AboutUs/AboutUs';
import { Link } from 'react-router-dom';

const Main = () => {
    const { data: movies } = useGetPopularMoviesQuery();
    const { data: serials } = useGetAllTypesQuery(['tv-series']);
    const { data: cartoon } = useGetAllTypesQuery(['cartoon']);
    const { data: drams } = useGetPopularMoviesQuery();

    return (
        <div>
            <MySwiper />
            <RecommendMovies title='Рекомендую посмотреть' data={movies} />
            <RecommendMovies title='Сериалы-новинки' data={serials} />
            <RecommendMovies title='Драмы' data={drams} />
            <OnlineCinema />
            <RecommendMovies title='Современные мультфильмы' data={cartoon} />
            <RecommendMovies title='Лучшие сериалы в подписке' data={serials} />
            <RecommendMovies title='Российские комедии' data={drams} />


        </div>
    );
};

export default Main;