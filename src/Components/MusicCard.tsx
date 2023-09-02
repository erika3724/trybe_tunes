import { useEffect, useState } from 'react';
import { AlbumType, SongType } from '../types';
import checked from '../images/checked_heart.png';
import uncheked from '../images/empty_heart.png';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

type Music = {
  album: [AlbumType, ...SongType[]] | any
};

export default function MusicCard({ album }:Music) {
  const [song, setSong] = useState<[...SongType[]]>([]);
  const [albums, setAlbums] = useState<[...AlbumType[]]>([]);
  useEffect(() => {
    const a = album.filter((d: any) => d.wrapperType === 'track');
    const b = album.filter((c: any) => c.wrapperType === 'collection');
    setAlbums(b);
    setSong(a);
  }, [album]);
  const heart = async (a: any, b: any) => {
    const c = album.filter((d: { trackId: any; }) => d.trackId === a.trackId);
    if (b.checked) {
      c[0].favorite = true;
      await addSong(c[0]);
    } else {
      c[0].favorite = false;
      await removeSong(c[0]);
    }
    const q = song.indexOf(a);
    const t = song.filter((e: { trackId: any; }) => e.trackId !== a.trackId);
    t.splice(q, 0, c[0]);
    setSong(t);
  };
  return (
    <section>
      <h1 data-testid="artist-name">{albums[0]?.artistName}</h1>
      <h1 data-testid="album-name">{albums[0]?.collectionName}</h1>
      {
            song.map((b:any) => (
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
                  id={ b.trackId }
                  checked={ b.favorite }
                  onChange={ (a) => heart(b, a.target) }
                  hidden
                />
                <label
                  htmlFor={ b.trackId }
                  data-testid={ `checkbox-music-${b.trackId}` }
                >
                  <img src={ b.favorite === true ? checked : uncheked } alt="favorite" />
                </label>

              </div>
            ))
        }
    </section>
  );
}
