import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../FireBase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import './HomePage.css';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://dattebayo-api.onrender.com/characters')
      .then(response => {
        setCharacters(response.data.characters);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddToFavorites = async (character) => {
    try {
      await addDoc(collection(db, 'favorites'), {
        id: character.id,
        name: character.name,
        images: character.images,
        rank: character.rank?.ninjaRank?.['Part I'] || 'No Rank',
        classification: character.personal?.classification || 'No Classification',
        clan: character.personal?.clan || 'No Clan',
      });
      alert('Personaje agregado a favoritos');
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  return (
    <div className="homepage-container">
      {Array.isArray(characters) && characters.map(character => (
        <Card key={character.id} className="card">
          <CardMedia
            component="img"
            image={character.images[0]}
            alt={character.name}
          />
          <CardContent className="card-content">
            <Typography className="card-title">{character.name}</Typography>
            <Typography className="card-subtitle">Rango: {character.rank?.ninjaRank?.['Part I']}</Typography>
            <Typography className="card-subtitle">Clasificación: {character.personal?.classification}</Typography>
            <Typography className="card-subtitle">Clan: {character.personal?.clan}</Typography>
            <Link to={`/character/${character.id}`} className="card-link">Ver detalles</Link>
            <IconButton
              className="icon-button favorite-icon"
              onClick={() => handleAddToFavorites(character)}
            >
              <FavoriteIcon className="heart-icon" />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
