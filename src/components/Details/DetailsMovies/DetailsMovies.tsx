import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import trailerIcon from '../../../assets/icons/trailer.svg';
import downloadIcon from '../../../assets/icons/download.svg';
import freewatchIcon from '../../../assets/icons/freewatch.svg';
import muteIcon from '../../../assets/icons/mute.svg';
import ContentLoader from "react-content-loader"
import './DetailsMovies.scss';
import { useGetMovieIdQuery } from '../../../Store/Services/getAllMovie.tsx';

const DetailsMovies = () => {
    const { id } = useParams();
    const { data: movieData, isLoading: isMovieLoading } = useGetMovieIdQuery(id || '0');


    if (isMovieLoading) {
        return 'Loading';
    }

    if (!movieData) {
        return 'Not found';
    }

    const {
        videos,
        names,
        description,
        persons,
        rating,
        year,
        genres,
        ageRating,
        countries,
        votes,
    } = movieData;


    const trailerUrl = videos?.trailers[videos?.trailers.length - 4]?.url;

    return (
        <div className='mainDescription'>
            <div className='container'>
                <div className='mainVideo'>
                    <Link to='/'>Назад</Link>
                    {trailerUrl?.length > 0 ?
                        <div className='mainDescription__video'>
                            <ReactPlayer url={trailerUrl} />
                        </div>
                        :
                        <ContentLoader
                            speed={2}
                            className='loader'
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="5" y="22" rx="0" ry="0" width="100%" height="350px" />
                        </ContentLoader>
                    }
                    <div className='mainVideo__buttons'>
                        <div className='mainVideo__twoButtons'>
                            <div className='mainVideo__trailer'>
                                <button className='mainVideo__buttonTrailer'>
                                    <img src={trailerIcon} alt='Trailer' />
                                    Трейлер
                                </button>
                            </div>
                            <div className='mainVideo__buttonDownload'>
                                <button className='mainVideo__buttonDownload'>
                                    <img src={downloadIcon} alt='Download' />
                                </button>
                            </div>
                        </div>

                        <div className='mainVideo__buttonFree'>
                            <button className='mainVideo__buttonFree'>
                                <img src={freewatchIcon} alt='Free Watch' />
                                Бесплатные сериалы
                            </button>
                        </div>
                    </div>
                </div>

                <div className='textDetails'>
                    <div className='textDetails__descriptions'>
                        <p className='textDetails__movieTitle'>{names[0].name}</p>
                        <div className='textDetails__movieYear'>
                            <p className='textDetails__movieYear'>{year}г.</p>
                            <p>{ageRating}+</p>
                        </div>
                        <div className='textDetails__movieGenre'>
                            {countries.map((item) =>
                                <p className='textDetails__genreStyle'>{item.name}</p>
                            )}
                            {genres.map((genre, index) => (
                                <p className='textDetails__genreStyle' key={index}>
                                    {genre.name}
                                </p>
                            ))}
                        </div>
                        <div className='textDetails__movieF'>
                            <p className='textDetails__movieStyle'>FullHD</p>
                            <div className='textDetails__movieLanguageMain'>
                                <button className='textDetails__movieLanguage'>
                                    <img src={muteIcon} alt='Mute' />
                                    Рус
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='textDetails__raiting'>
                        <div className='textDetails__myIvi'>
                            <div className='textDetails__myIviStyle'>
                                <p className='textDetails__myIviStyleRate'>{rating.filmCritics}</p>
                            </div>
                            <p className='textDetails__myIviStyleTitle'>Рейтинг Иви</p>
                        </div>

                        {persons.slice(0, 4).map((item) => (
                            <div className='textDetails__myIvi' key={item.id}>
                                <div className='textDetails__myIviStyle'>
                                    <img className='textDetails__imageStyle' src={item.photo} alt='Person' />
                                </div>
                                <p className='textDetails__myIviStyleTitle'>{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className='textDetails__movieDescriptionGenre'>
                        <p className='textDetails__movieDescriptionGenre_text'>{description}</p>
                        <div className='textDetails__movieDescriptionGenre_btn'>
                            <button className='textDetails__movieDescriptionGenre_button'>Детали о сериале</button>
                        </div>
                    </div>

                    <div className='textDetails__iviRating'>
                        <div className='textDetails__iviRating_backgroundDark'>
                            <div className='textDetails__iviRating_descriptions'>
                                <div className='textDetails__iviRating_descriptions_greenBox'>
                                    <div className='textDetails__iviRating_background_green_dots'>
                                        <p className='textDetails__iviRating_background_green_dots'>...</p>
                                    </div>
                                </div>
                                <div className='textDetails__iviRating_descriptions_Alltext'>
                                    <p className='textDetails__iviRating_descriptions_textIvi'>Рейтинг Иви</p>
                                    <p className='textDetails__iviRating_descriptions_textSujet'>Интересный сюжет</p>
                                    <p className='textDetails__iviRating_descriptions_textRate'>{votes.filmCritics}</p>
                                </div>
                                <div className='textDetails__iviRating_buttonStyle'>
                                    <button className='textDetails__iviRating_buttonStyle_btn'>Оценить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsMovies;
