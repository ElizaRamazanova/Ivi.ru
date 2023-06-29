import React, { useState, useEffect } from 'react';
import danjer from '../../../assets/icons/danjer.png';
import './SujetStyles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import dayjs from 'dayjs';

interface DocsData {
    author: string,
    date: string,
    id: number,
    movieId: number,
    review: string,
    title: string,
    type: string,
}

interface IProps {
    data: DocsData[] | undefined
    movieId: boolean,
}
interface IReview {
    id: number,
    review: string,
    date: string,
    movieId: string,
    author: string
}

const SujetStyles = ({ data, movieId }: IProps) => {
    const [userReview, setUserReview] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieReviews, setMovieReviews] = useState<IReview[]>([]);


    useEffect(() => {
        const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        const filteredReviews = existingReviews.filter((review) => review.movieId === movieId);
        setMovieReviews(filteredReviews);
    }, [movieId]);


    const handleReviewSubmit = (): void => {
        if (userReview) {
            const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            const newReview = {
                id: Date.now(),
                movieId: movieId,
                review: userReview,
                date: new Date().toLocaleDateString(),
            };
            const updatedReviews = [...existingReviews, newReview];
            localStorage.setItem('reviews', JSON.stringify(updatedReviews));
            setUserReview('');
            setIsModalOpen(false);
        }
    };


    return (
        <div className='SujetStyles'>
            <div className='Sujet'>
                <p className='Sujet__mainText'>Сюжет</p>
                <div className='Sujet__iconText'>
                    <img className='Sujet__icon' src={danjer} alt='icon' />
                    <p className='Sujet__textSpoiler'>Осторожно, спойлеры</p>
                </div>
            </div>
            <div className='Sujet__mainDescription'>
                <div className='Sujet__mainDescription_text'>
                    <p>
                        Вечерний Санкт-Петербург, Невский проспект. Неизвестный преступник, оглушив водительницу, угоняет ее автомобиль, въезжает на подземную парковку, пользуясь электронным ключом своей жертвы. Там он убивает
                    </p>
                    <button className='Sujet__mainDescription_button'>Читать дальше</button>
                </div>
            </div>
            <div className='SujetStyles__feedback'>
                <div className='SujetStyles__feedback__text'>
                    <div className='SujetStyles__feedback__text_position'>
                        <p className='SujetStyles__feedback__text_main'>Отзывы</p>
                        <p className='SujetStyles__feedback__text_count'>113</p>
                    </div>
                    <p className='SujetStyles__feedback__text_serialTitle'>о сериале "Невский"</p>
                </div>
                <div className='SujetStyles__feedback__button'>
                    <button className='SujetStyles__feedback__button_style' onClick={() => setIsModalOpen(true)}>
                        Оставить отзыв
                    </button>
                    <div className={`modal ${isModalOpen ? 'active' : ''}`}>
                        {isModalOpen && (
                            <div className="modal-content">
                                <textarea
                                    className="SujetStyles__feedback__input"
                                    placeholder="Введите ваш отзыв"
                                    value={userReview}
                                    onChange={(e) => setUserReview(e.target.value)}
                                ></textarea>
                                <div className='buttons'>
                                    <button className="SujetStyles__feedback__button_style" onClick={handleReviewSubmit}>
                                        Оставить отзыв
                                    </button>
                                    <button className="close-button" onClick={() => setIsModalOpen(false)}>
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Swiper slidesPerView={5} spaceBetween={15} className='mySwiper'>
                {data.docs?.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                        <div className='SujetStyles__box'>
                            <p className='SujetStyles__author'>{item.author}</p>
                            <p className='SujetStyles__review'>{item.review}</p>
                            <p className='SujetStyles__date'>{dayjs(item.date).format('DD.MM.YYYY')}</p>
                        </div>
                    </SwiperSlide>
                ))}

                {movieReviews.map((item) => (
                    <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                        <div className='SujetStyles__box'>
                            <p className='SujetStyles__author'>{item.movieId}</p>
                            <p className='SujetStyles__review'>{item.review}</p>
                            <p className='SujetStyles__date'>{item.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );

};

export default SujetStyles;


