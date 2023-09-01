import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import { AlbumType, SongType } from '../types';
import MusicCard from './MusicCard';
import Carregando from './Carregando';

export default function Album() {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [album, setAlbum] = useState<[AlbumType, ...SongType[]]>();
  const { id } = useParams() as { id:string };
  useEffect(() => {
    const chamado = async () => {
      const a = await getMusics(id);
      setAlbum(a);
      setCarregando(true);
    };
    chamado();
  }, []);
  return (
    <div>
      {' '}
      {
        carregando
          ? <MusicCard album={ album } />
          : <Carregando />
      }
    </div>
  );
}
