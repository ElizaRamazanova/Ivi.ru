import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/main/Main';
import Footer from './components/Footer/Footer';
import Details from './pages/Details/Details';
import AboutUs from './components/AboutUs/AboutUs';
import LoginForm from './components/RegistrForm/RegistrForm';
import RegistrForm from './components/RegistrForm/RegistrForm';
import Login from './components/Login/Login';
import FavoriteMovies from './components/FavoriteMovies/FavoriteMovies';




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/registration' element={<RegistrForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favoriteMovies' element={<FavoriteMovies />} />
      </Routes>
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
