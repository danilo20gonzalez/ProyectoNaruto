import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardContent, Typography } from '@mui/material';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://dattebayo-api.onrender.com/characters/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!character) return <div className="character-detail-container">Loading...</div>;

  return (
    <div className="character-detail-container">
      <Card className="character-detail-card">
        <Carousel className="carousel">
          {character.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Character ${index}`} />
            </div>
          ))}
        </Carousel>
        <CardContent className="character-detail-content">
          <Typography className="character-name">{character.name}</Typography>
          
          <Typography className="character-info-title">Información Personal</Typography>
          <ul className="character-info-list">
            <li><strong>Fecha de nacimiento:</strong> {character.personal.birthdate}</li>
            <li><strong>Sexo:</strong> {character.personal.sex}</li>
            <li><strong>Altura:</strong> {JSON.stringify(character.personal.height)}</li>
            <li><strong>Peso:</strong> {JSON.stringify(character.personal.weight)}</li>
            <li><strong>Grupo sanguíneo:</strong> {character.personal.bloodType}</li>
            <li><strong>Clan:</strong> {character.personal.clan}</li>
          </ul>

          <Typography className="character-info-title">Clasificación</Typography>
          <ul className="character-info-list">
            <li>{character.personal.classification}</li>
          </ul>

          <Typography className="character-info-title">Rango Ninja</Typography>
          <ul className="character-info-list">
            <li>{JSON.stringify(character.rank.ninjaRank)}</li>
          </ul>

          <Typography className="character-info-title">Jutsus</Typography>
          <ul className="character-info-list">
            {character.jutsus.map((jutsu, index) => (
              <li key={index}>{jutsu}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterDetail;
