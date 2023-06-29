import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.tsx';
import Main from './pages/main/Main.tsx';
import Footer from './components/Footer/Footer.tsx';
import Details from './pages/Details/Details.tsx';
import AboutUs from './components/AboutUs/AboutUs.tsx';
import RegistrForm from './components/RegistrForm/RegistrForm.tsx';
import Login from './components/Login/Login.tsx';
import FavoriteMovies from './components/FavoriteMovies/FavoriteMovies.tsx';
// import SearchResults from './components/SearchResults/SearchResults';




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
        {/* <Route path="/search" element={<SearchResults />} /> */}
      </Routes>
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
