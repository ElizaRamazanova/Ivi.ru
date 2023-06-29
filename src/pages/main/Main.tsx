import React from 'react';
import MySwiper from '../../components/Swiper/MySwiper.tsx';
import RecommendMovies from '../../components/RecommendMovies/recommendMovies.tsx';
import { useGetAllTypesQuery, useGetMovieIdQuery, useGetPopularMoviesQuery } from '../../Store/Services/getAllMovie.tsx';
import OnlineCinema from '../../components/OnlineCinema/OnlineCinema.tsx';
import { MovieDataDocs, MovieId } from '../../shared/models';


const Main = () => {
    const { data: movies } = useGetPopularMoviesQuery();
    const { data: serials } = useGetAllTypesQuery(['tv-series']);
    const { data: cartoon } = useGetAllTypesQuery(['cartoon']);
    const { data: drams } = useGetPopularMoviesQuery();
    return (
        <div>
            <MySwiper />
            <RecommendMovies title='Рекомендую посмотреть' data={movies?.docs} />
            <RecommendMovies title='Сериалы-новинки' data={serials?.docs} />
            <RecommendMovies title='Драмы' data={drams?.docs} />
            <OnlineCinema />
            <RecommendMovies title='Современные мультфильмы' data={cartoon?.docs} />
            <RecommendMovies title='Лучшие сериалы в подписке' data={serials?.docs} />
            <RecommendMovies title='Российские комедии' data={drams?.docs} />
        </div>
    );
};

export default Main;