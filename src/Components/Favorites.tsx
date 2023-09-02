import React, { useEffect, useState } from 'react';
import checked from '../images/checked_heart.png';
import Carregando from './Carregando';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import { SongType } from '../types';

export default function Favorites() {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [favoritos, setFavoritos] = useState<SongType[]>([]);

  useEffect(() => {
    const chamado = async () => {
      const a = await getFavoriteSongs();
      await setFavoritos(a);
      setCarregando(true);
    };
    chamado();
  }, []);
  const heart = async (a: any) => {
    await removeSong(a);
    const d = await getFavoriteSongs();
    setFavoritos(d);
  };
  return (
    <div>
      {' '}
      {
        carregando
          ? favoritos.map((b) => (
            <div key={ b.trackName }>
              <p>{b.trackName}</p>
              <audio
                data-testid="audio-component"
                src={ b.previewUrl }
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                {' '}
                <code>audio</code>
                .
              </audio>

              <input
                type="checkbox"
                name={ b.trackName }
                id={ b.trackId.toString() }
                onChange={ () => heart(b) }
                hidden
              />
              <label
                htmlFor={ b.trackId.toString() }
                data-testid={ `checkbox-music-${b.trackId}` }
              >
                <img src={ checked } alt="favorite" />
              </label>

            </div>
          ))
          : <Carregando />
      }
    </div>
  );
}
