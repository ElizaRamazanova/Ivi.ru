import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import vectorIcon from '../../assets/icons/vector.png';
import './BestSerialsStyle.scss'
import { useGetPopularMoviesQuery } from '../../Store/Services/getAllMovie';


const BestSerials = () => {
    const { data } = useGetPopularMoviesQuery();
    return (
        <div>
            <button className='bestSerialStyle__posterText' >
                Лучшие сериалы в подписке <img src={vectorIcon} alt="icon" />
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
                        <img className='bestSerialStyle__posterImage ' src={movie.poster.previewUrl} alt={movie.title} />
                        <div className='bestSerialStyle__movie-title'>{movie.name}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestSerials;