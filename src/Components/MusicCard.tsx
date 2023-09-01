import { useEffect, useState } from 'react';
import { AlbumType, SongType } from '../types';

type Music = {
  album: [AlbumType, ...SongType[]] | any
};

export default function MusicCard({ album }:Music) {
  const [song, setSong] = useState<[...SongType[]]>([]);
  const [albums, setAlbums] = useState<[...AlbumType[]]>([]);
  useEffect(() => {
    const a = album.filter((d: any) => d.wrapperType === 'track');
    console.log(album);
    const b = album.filter((c: any) => c.wrapperType === 'collection');
    console.log(b);
    setAlbums(b);
    setSong(a);
  }, [album]);
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
              </div>
            ))
        }
    </section>
  );
}
