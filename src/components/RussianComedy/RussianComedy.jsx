import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import vector from '../assets/icons/Vector.png';
import { useGetPopularMoviesQuery } from '../Store/Services/getAllMovie.js';
import './ComedyStyle.scss'
const RussianComedy = () => {
    const { data } = useGetPopularMoviesQuery();
    return (
        <div>
            <button className='comedyStyle__posterText' >
                Российские комедии <img src={vector} alt="icon" />
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
                        <img className='comedyStyle__posterImage ' src={movie.poster.previewUrl} alt={movie.title} />
                        <div className='comedyStyle__movie-title'>{movie.name}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RussianComedy;