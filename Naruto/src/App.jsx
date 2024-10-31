// App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './Componentes/HomePage';
import CharacterDetail from './Componentes/CharacterDetail';
import FavoritesPage from './Componentes/FavoritesPage';
import Header from './Componentes/Header';

const App = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/'); 
  };

  const handleNavigateFavorites = () => {
    navigate('/favorites'); 
  };

  return (
    <div>
      <Header 
        handleNavigateHome={handleNavigateHome} 
        handleNavigateFavorites={handleNavigateFavorites} 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;

