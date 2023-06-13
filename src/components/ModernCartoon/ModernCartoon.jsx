import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import vector from '../assets/icons/Vector.png';
import { useGetPopularMoviesQuery } from '../Store/Services/getAllMovie.js';
import './ModernCartoon.scss'
const ModernCartoon = () => {
    const { data } = useGetPopularMoviesQuery();
    return (
        <div>
            <button className='cartoonStyle__posterText' >
                Современные мультфильмы <img src={vector} alt="icon" />
            </button>
            <Swiper

                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={15}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.docs?.map(movie => (
                    <SwiperSlide key={movie.id} style={{
                        width: 'auto'
                    }}>
                        <img className='cartoonStyle__posterImage ' src={movie.poster.previewUrl} alt={movie.title} />
                        <div className='cartoonStyle__movie-title'>{movie.name}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ModernCartoon;