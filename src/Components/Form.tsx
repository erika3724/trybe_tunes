import React from 'react';

type Parametro = {
  setValidar:(a:string) => void,
  validar:string,
  nome(a:React.MouseEvent<HTMLElement>): void;
};
export default function Form({ setValidar, validar, nome }:Parametro) {
  return (
    <form>
      <input
        type="text"
        data-testid="login-name-input"
        placeholder="Digite seu nome"
        onChange={ (a) => setValidar(a.target.value) }
      />
      <button
        type="submit"
        disabled={ validar.length < 3 }
        data-testid="login-submit-button"
        onClick={ (a) => nome(a) }
      >
        Entrar

      </button>
    </form>
  );
}
