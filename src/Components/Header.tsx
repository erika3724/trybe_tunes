import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

export default function Header() {
  const [carrregando, setCarregando] = useState<boolean>(false);
  const [nome, setNome] = useState<string>('');
  useEffect(() => {
    const busca = async () => {
      setCarregando(true);
      const a = await getUser();
      setNome(a.name);
      setCarregando(false);
    };
    busca();
  }, []);
  return (
    <header data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search"> Busca </NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites"> Favoritos </NavLink>
        <NavLink to="/profile" data-testid="link-to-profile"> Perfil </NavLink>
        {
            carrregando ? <Carregando /> : <p data-testid="header-user-name">{nome}</p>
        }
      </nav>
    </header>
  );
}
