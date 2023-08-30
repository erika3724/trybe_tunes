import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from './Carregando';
import FormSearch from './FormSearch';
import { AlbumType } from '../types';

export default function Search() {
  const [validate, setValidate] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [lista, setLista] = useState<AlbumType[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);
  const requisicao = async (b:React.MouseEvent<HTMLElement>) => {
    b.preventDefault();
    setCarregando(true);
    const a = await searchAlbumsAPI(validate);
    setLista(a);
    const c = validate;
    setNome(`Resultado de álbuns de: ${c}`);
    setCarregando(false);
    setValidate('');
  };
  return (
    <div>
      { carregando
        ? <Carregando />
        : <FormSearch
            setValidate={ setValidate }
            validate={ validate }
            requisicao={ requisicao }
        />}
      {
            nome.length > 19 && <p>{nome}</p>
        }
      {
            lista.length > 0
              ? lista?.map((a) => (
                <Link
                  key={ a.collectionId }
                  data-testid={ `link-to-album-${a.collectionId}` }
                  to={ `/album/${a.collectionId}` }
                >
                  <img src={ a.artworkUrl100 } alt={ a.artistName } />
                  <h1>{a.collectionName}</h1>
                  <p>{a.artistName}</p>
                </Link>
              ))
              : <p>Nenhum álbum foi encontrado</p>
        }
    </div>

  );
}
