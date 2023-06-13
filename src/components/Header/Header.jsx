

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/icons/reposition_iviLogoPlateRounded.svg.png';
import imagess from '../../assets/icons/поисковик.png';
import bell from '../../assets/icons/колокол.png';
import user from '../../assets/icons/Пользователь.png';
import styles from './HeaderStyle.scss';
import burgermenu from '../../assets/icons/burger-menu.png'


const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const userAccount = JSON.parse(localStorage.getItem('user'))

    return (
        <header className={styles.header}>
            <div className="logo"><img src={images} alt="" srcSet="" /></div>
            <ul className='navigation'>
                <Link to="/">Мой Иви</Link>
                <li><Link to="/news">Что нового</Link></li>
                <li><Link to="/movies">Фильмы</Link></li>
                <li><Link to="/tv-shows">Сериалы</Link></li>
                <li><Link to="/cartoons">Мультфильмы</Link></li>
            </ul>
            <div>
                <ul className='navigationIcons'>
                    <li><button>Смотреть 30 дней бесплатно</button></li>
                    <li><Link to="/news"><img src={imagess} alt="icon" /> Поиск</Link></li>
                    <li><Link to="/icon"><img src={bell} alt="icon" /></Link></li>
                    <li>
                        <Link to="/registration">
                            <img src={user} alt="user_icon" />
                            {userAccount && <span>{userAccount?.username}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={() => setBurgerMenuOpen(true)} className={'burger_menu'}>
                <img className='burger_menu__iconBurger' src={burgermenu} alt="" srcset="" />
            </div>
            {isBurgerMenuOpen &&
                <div className='open__modal_burger'>
                    <ul className='open__modal_ul'>
                        <div onClick={() => setBurgerMenuOpen(false)}>
                            <img className='iconBurger' src={burgermenu} alt="" srcset="" />
                        </div>
                        <li><Link to="/">Мой Иви</Link></li>
                        <li><Link to="/news">Что нового</Link></li>
                        <li><Link to="/movies">Фильмы</Link></li>
                        <li><Link to="/tv-shows">Сериалы</Link></li>
                        <li><Link to="/cartoons">Мультфильмы</Link></li>
                    </ul>
                </div>
            }
        </header>
    );
};

export default Header;

