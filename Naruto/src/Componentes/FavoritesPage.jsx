import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../FireBase/firebase';
import { Card, CardContent, Typography } from '@mui/material';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'favorites'));
        const favs = querySnapshot.docs.map(doc => doc.data());
        setFavorites(favs);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div className="favorites-page-container">
      <h1 className="favorites-title">Tus Favoritos</h1>
      {favorites.map((fav, index) => (
        <Card key={index} className="favorite-card">
          <CardContent className="favorite-card-content">
            <Typography variant="h6" className="favorite-name">
              {fav.name}
            </Typography>
            {fav.birthday && (
              <Typography variant="subtitle1" className="favorite-birthday">
                Fecha de nacimiento: {fav.birthday}
              </Typography>
            )}
            {}
            {fav.clan && (
              <Typography variant="body2" className="favorite-clan">
                Clan: {fav.clan}
              </Typography>
            )}
            {fav.classification && (
              <Typography variant="body2" className="favorite-classification">
                Clasificación: {fav.classification}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FavoritesPage;
