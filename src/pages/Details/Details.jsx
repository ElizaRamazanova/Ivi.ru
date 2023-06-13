import React, { useEffect, useState } from 'react';
import Detailsmovies from '../../components/Details/DetailsMovies/DetailsMovies';
import RecommendMovies from '../../components/RecommendMovies/recommendMovies';
import { useGetMovieIdQuery, useGetPopularMoviesQuery } from '../../Store/Services/getAllMovie';
import { useParams } from 'react-router-dom';
import './Details.scss'

import { useGetReviewQuery } from '../../Store/Services/getPoster';
import ActorsStyles from '../../components/Details/ActorsStyles/actorsStyles';
import SujetStyles from '../../components/Details/SujetStyles/SujetStyles';
import Recenzion from '../../components/Details/Recenzion/Recenzion';
import FirstSeason from '../../components/Details/FirstSeason/FirstSeason';
import ShowGadjet from '../../components/Details/ShowGadjet/ShowGadjet';

const Details = () => {
    const { id } = useParams();
    const { data: serials } = useGetPopularMoviesQuery();
    const { data: movieData, isLoading, refetch } = useGetMovieIdQuery(id);
    const { data: movieReview, isLoading: isLoadingReview, refetch: reviewRefetch } = useGetReviewQuery(id);
    const [showAllActors, setShowAllActors] = useState(false);



    const actorsToDisplay = showAllActors ? movieData?.persons : movieData?.persons.slice(0, 10);

    if (isLoading || isLoadingReview) {
        return <p>Загрузка...</p>
    }

    return (
        <div>
            <Detailsmovies />
            <RecommendMovies title='С сериалом «Невский» смотрят' data={serials} />
            <ActorsStyles onClickShow={() => setShowAllActors(!showAllActors)} actorsToDisplay={actorsToDisplay} showAllActors={showAllActors} movieData={movieData} />
            <RecommendMovies title='Трейлеры и доп.материалы' data={serials} />
            <RecommendMovies title='Сериал в подборках' data={serials} />
            <SujetStyles data={movieReview} />
            <Recenzion />
            <FirstSeason />
            <ShowGadjet />

        </div>
    );
};

export default Details;
