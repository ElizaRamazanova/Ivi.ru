// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import trailer from '../../../assets/icons/trailer.svg'
// import download from '../../../assets/icons/download.svg'
// import freewatch from '../../../assets/icons/freewatch.svg'
// import mute from '../../../assets/icons/mute.svg'
// import './DetailsMovies.scss'
// import anton from '../../../assets/images/antone.svg'
// import ReactPlayer from 'react-player';
// import { useGetMovieIdQuery } from '../../../Store/Services/getAllMovie';
// import { useGetReviewQuery } from '../../../Store/Services/getPoster';

// const Detailsmovies = () => {

//     const { id } = useParams();
//     const { data: movieData, isLoading, refetch } = useGetMovieIdQuery(id);
//     console.log(movieData);
//     const { data: movieReview, isLoading: isLoadingReview, refetch: reviewRefetch } = useGetReviewQuery(id);
//     // console.log(movieReview);

//     if (!movieData && isLoading) return 'Loading'
//     if (!movieData && !isLoading) return 'Not found'

//     const { videos, names, descriptions, persons, raiting, year, genres, ageRaiting, countries, votes
//     } = movieData
//     console.log(movieData)

//     const trailerUrl = videos.trailers[videos.trailers.length - 4]?.url

//     return (
//         < div className='mainDescription' >
//             <div className='container'>
//                 <div className='mainVideo'>
//                     <Link to='/'> Назад </Link>

//                     <div className='mainDescription__video' >

//                         <ReactPlayer url={trailerUrl} />
//                     </div>
//                     <div className='mainVideo__buttons'>
//                         <div className='mainVideo__twoButtons'>
//                             <div className='mainVideo__trailer'>
//                                 <button className='mainVideo__buttonTrailer'><img src={trailer} alt="" srcset="" /> Трейлер</button>
//                             </div>
//                             <div className='mainVideo__buttonDownload'>
//                                 <button className='mainVideo__buttonDownload'><img src={download} alt="" /></button>
//                             </div>
//                         </div>

//                         <div className='mainVideo__buttonFree'>
//                             <button className='mainVideo__buttonFree'> <img src={freewatch} alt="" /> Бесплатные сериалы</button>
//                         </div>

//                     </div>
//                 </div>

//                 <div className='textDetails'>
//                     <div className='textDetails__descriptions'>
//                         <p className='textDetails__movieTitle'>{names}</p>
//                         <div className='textDetails__movieYear'>
//                             <p className='textDetails__movieYear'>{year}</p>
//                             <p>{ageRaiting}</p>
//                         </div>
//                         <div className='textDetails__movieGenre'>
//                             <p className='textDetails__genreStyle'>{countries}</p>
//                             <p className='textDetails__genreStyle'>{genres}</p>
//                             <p className='textDetails__genreStyle'>{genres[0, 1, 2]}</p>
//                             <p className='textDetails__genreStyle'>Русские</p>
//                         </div>
//                         <div className='textDetails__movieF'>
//                             <p className='textDetails__movieStyle'>FullHD</p>
//                             <div className='textDetails__movieLanguageMain'>
//                                 <button className='textDetails__movieLanguage'><img src={mute} alt="" />Рус</button>
//                             </div>

//                         </div>

//                     </div>
//                     <div className='textDetails__raiting'>
//                         <div className='textDetails__myIvi'>
//                             <div className='textDetails__myIviStyle'>
//                                 <p className='textDetails__myIviStyleRate'>{raiting}</p>
//                             </div>
//                             <p className='textDetails__myIviStyleTitle'>Рейтинг Иви</p>
//                         </div>
//                         <div className='textDetails__myIvi'>
//                             <div className='textDetails__myIviStyle'>
//                                 <img className='textDetails__imageStyle' src={anton} alt="" />
//                             </div>
//                             <p className='textDetails__myIviStyleTitle'> {persons}</p>
//                         </div>
//                         <div className='textDetails__myIvi'>
//                             <div className='textDetails__myIviStyle'>
//                                 <img className='textDetails__imageStyle' src={anton} alt="" />
//                             </div>
//                             <p className='textDetails__myIviStyleTitle'>  {persons}</p>
//                         </div>
//                         <div className='textDetails__myIvi'>
//                             <div className='textDetails__myIviStyle'>
//                                 <img className='textDetails__imageStyle' src={anton} alt="" />
//                             </div>
//                             <p className='textDetails__myIviStyleTitle'>  {persons}</p>
//                         </div>
//                         <div className='textDetails__myIvi'>
//                             <div className='textDetails__myIviStyle'>
//                                 <img className='textDetails__imageStyle' src={anton} alt="" />
//                             </div>
//                             <p className='textDetails__myIviStyleTitle'>  {persons}</p>
//                         </div>
//                     </div>
//                     <div className='textDetails__movieDescriptionGenre'>
//                         <p className='textDetails__movieDescriptionGenre_text'>
//                             {descriptions}
//                         </p>
//                         <div className='textDetails__movieDescriptionGenre_btn'>
//                             <button className='textDetails__movieDescriptionGenre_button'> Детали о сериале</button>
//                         </div>

//                     </div>
//                     <div className='textDetails__iviRating'>
//                         <div className='textDetails__iviRating_backgroundDark' >
//                             <div className='textDetails__iviRating_descriptions'>
//                                 <div className='textDetails__iviRating_descriptions_greenBox'>

//                                     <div className='textDetails__iviRating_background_green_dots'>
//                                         <p className='textDetails__iviRating_background_green_dots'>...</p>
//                                     </div>

//                                 </div>
//                                 <div className='textDetails__iviRating_descriptions_Alltext'>
//                                     <p className='textDetails__iviRating_descriptions_textIvi'>Рейтинг Иви</p>
//                                     <p className='textDetails__iviRating_descriptions_textSujet'>Интересный сюжет</p>
//                                     <p className='textDetails__iviRating_descriptions_textRate'>{votes}</p>


//                                 </div>
//                                 <div className='textDetails__iviRating_buttonStyle'>
//                                     <button className='textDetails__iviRating_buttonStyle_btn' >Оценить</button>

//                                 </div>

//                             </div>
//                         </div>

//                     </div>


//                 </div>

//             </div>
//         </div >

//     );
// };

// export default Detailsmovies;


import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useGetMovieIdQuery } from '../../../Store/Services/getAllMovie';
import { useGetReviewQuery } from '../../../Store/Services/getPoster';

import trailerIcon from '../../../assets/icons/trailer.svg';
import downloadIcon from '../../../assets/icons/download.svg';
import freewatchIcon from '../../../assets/icons/freewatch.svg';
import muteIcon from '../../../assets/icons/mute.svg';
import antonImage from '../../../assets/images/antone.svg';

import './DetailsMovies.scss';

const DetailsMovies = () => {
    const { id } = useParams();
    const { data: movieData, isLoading: isMovieLoading } = useGetMovieIdQuery(id);
    const { data: movieReview, isLoading: isReviewLoading } = useGetReviewQuery(id);

    if (isMovieLoading || isReviewLoading) {
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

                    <div className='mainDescription__video'>
                        <ReactPlayer url={trailerUrl} />
                    </div>
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
