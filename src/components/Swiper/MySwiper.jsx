import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useGetPosterQuery } from '../../Store/Services/getPoster';
import './MySwiperStyles.scss'


const MySwiper = () => {
    const { data, isError, error, isLoading, refetch } = useGetPosterQuery();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error}</div>;
    }
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiperKino">
                {data?.docs?.map((movie) => (
                    <SwiperSlide key={movie.id} style={{ width: '100%' }}>
                        <h3>{movie.name}</h3>
                        <img className='mySwiper__swiperimage' src={movie.previewUrl} alt={movie.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MySwiper;

