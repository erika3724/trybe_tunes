import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';
import Form from './Form';

export default function Login() {
  const navigate = useNavigate();
  const [validar, setValidar] = useState<string>('');
  const [carregando, setCarregando] = useState<boolean>(false);
  const nome = async (a:React.MouseEvent<HTMLInputElement>) => {
    a.preventDefault();
    setCarregando(true);
    const name = { name: `${validar}` };
    await createUser(name);
    navigate('/search');
  };
  return (
    <div>
      {
      carregando
        ? <Carregando />
        : <Form setValidar={ setValidar } validar={ validar } nome={ nome } />
}
    </div>
  );
}
