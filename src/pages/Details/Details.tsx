import React, { useState } from 'react';
import Detailsmovies from '../../components/Details/DetailsMovies/DetailsMovies.tsx';
import RecommendMovies from '../../components/RecommendMovies/recommendMovies.tsx';
import { useGetMovieIdQuery, useGetPopularMoviesQuery } from '../../Store/Services/getAllMovie.tsx';
import { useParams } from 'react-router-dom';
import './Details.scss'

import { useGetReviewQuery } from '../../Store/Services/getPoster';
import SujetStyles from '../../components/Details/SujetStyles/SujetStyles.tsx';
import Recenzion from '../../components/Details/Recenzion/Recenzion.tsx';
import FirstSeason from '../../components/Details/FirstSeason/FirstSeason.tsx';
import ShowGadjet from '../../components/Details/ShowGadjet/ShowGadjet.tsx';
import ActorsStyles from '../../components/Details/ActorsStyles/actorsStyles.tsx';







const Details = () => {
    const { id } = useParams();
    const { data: serials } = useGetPopularMoviesQuery();
    const { data: movieData, isLoading, refetch } = useGetMovieIdQuery(id || '0');
    const { data: movieReview, isLoading: isLoadingReview, refetch: reviewRefetch } = useGetReviewQuery(id);
    const [showAllActors, setShowAllActors] = useState(false);



    const actorsToDisplay = showAllActors ? movieData?.persons : movieData?.persons.slice(0, 10);


    if (isLoading || isLoadingReview) {
        return <p>Загрузка...</p>
    }

    return (
        <div>
            <Detailsmovies />
            <RecommendMovies title='С сериалом «Невский» смотрят' data={serials?.docs} />
            <ActorsStyles onClickShow={() => setShowAllActors(!showAllActors)} actorsToDisplay={actorsToDisplay} showAllActors={showAllActors} movieData={movieData} />
            <RecommendMovies title='Трейлеры и доп.материалы' data={serials?.docs} />
            <RecommendMovies title='Сериал в подборках' data={serials?.docs} />
            <SujetStyles data={movieReview?.docs} />
            <Recenzion />
            <FirstSeason />
            <ShowGadjet />

        </div>
    );
};

export default Details;
