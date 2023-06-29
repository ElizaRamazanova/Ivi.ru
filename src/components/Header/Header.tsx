
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/icons/reposition_iviLogoPlateRounded.svg.png';
import imagess from '../../assets/icons/поисковик.png';
import bell from '../../assets/icons/колокол.png';
import user from '../../assets/icons/Пользователь.png';
import styles from './HeaderStyle.scss';
import burgermenu from '../../assets/icons/burger-menu.png';
import Card from '../../components/Card/Card.tsx'
import { useGetPopularMoviesQuery, useGetAllTypesQuery } from '../../Store/Services/getAllMovie.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';

const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [valueFilter, setValueFilter] = useState('')
    const [showSearchInput, setShowSearchInput] = useState(false);
    const userAccount = JSON?.parse(localStorage.getItem('user') || 'null');
    const { data: moviesResponse } = useGetPopularMoviesQuery();
    const movies = moviesResponse?.docs || [];
    const { data: serialsResponse } = useGetAllTypesQuery(['tv-series']);
    const serials = serialsResponse?.docs || []
    const { data: cartoonResponse } = useGetAllTypesQuery(['cartoon']);
    const cartoon = cartoonResponse?.docs || []
    const { data: dramsResponse } = useGetPopularMoviesQuery();
    const drams = dramsResponse?.docs || []

    const allMovies = [...movies, ...serials, ...cartoon, ...drams]
    const filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
    const [showList, setShowList] = useState(false);
    const handleSearchIconClick = () => {
        setShowSearchInput(!showSearchInput);
    };
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login')
    };
    return (
        <header className={styles.header}>
            <div className="logo">
                <img src={images} alt="" srcSet="" />
            </div>
            <ul className="navigation" onMouseEnter={() => setShowList(true)}
                onMouseLeave={() => setShowList(false)}>
                <li>
                    <Link to="/">Мой Иви</Link>
                </li>
                <li>
                    <Link to="/news">Что нового</Link>
                </li>
                <li>
                    <Link to="/movies" > Фильмы</Link>

                </li>
                <li>
                    <Link to="/tv-shows">Сериалы</Link>
                </li>
                <li>
                    <Link to="/cartoons">Мультфильмы</Link>
                </li>
            </ul>
            {showList && (
                <Dropdown />
            )}
            <div>
                <ul className="navigationIcons">
                    <li>
                        <button>Смотреть 30 дней бесплатно</button>
                    </li>
                    <li>

                        <div className="searchIcon" onClick={handleSearchIconClick}>
                            <img src={imagess} alt="icon" />
                        </div>
                        {showSearchInput && (
                            <div className="searchInputContainer">
                                <input
                                    type="text"
                                    value={valueFilter}
                                    onChange={(e) => setValueFilter(e.target.value)}
                                    placeholder="Поиск"
                                />
                                <div className="search_Modal">
                                    {valueFilter.length > 0 &&
                                        filteredMovies.map((movie) => (
                                            <Card key={movie.id} movie={movie} boolean={true} />
                                        ))}
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to="/icon">
                            <img src={bell} alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/registration">
                            <img src={user} alt="user_icon" />
                            {userAccount && <span>{userAccount?.username}</span>}
                        </Link>
                    </li>
                    {userAccount && <li>
                        <button onClick={handleLogout}>Выйти</button>
                    </li>}

                </ul>
            </div>
            <div onClick={() => setBurgerMenuOpen(true)} className="burger_menu">
                <img className="burger_menu__iconBurger" src={burgermenu} alt="" srcSet="" />
            </div>
            {isBurgerMenuOpen && (
                <div className="open__modal_burger">
                    <ul className="open__modal_ul">
                        <div onClick={() => setBurgerMenuOpen(false)}>
                            <img className="iconBurger" src={burgermenu} alt="" srcSet="" />
                        </div>
                        <li>
                            <Link to="/">Мой Иви</Link>
                        </li>
                        <li>
                            <Link to="/news">Что нового</Link>
                        </li>
                        <li>
                            <Link to="/movies">Фильмы</Link>
                        </li>
                        <li>
                            <Link to="/tv-shows">Сериалы</Link>
                        </li>
                        <li>
                            <Link to="/cartoons">Мультфильмы</Link>
                        </li>
                    </ul>
                </div>
            )}

        </header>
    );
};

export default Header;

