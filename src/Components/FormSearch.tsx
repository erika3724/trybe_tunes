type Parametro = {
  setValidate:(a:string) => void,
  validate:string,
  requisicao(a:React.MouseEvent<HTMLElement>): void;
};
export default function FormSearch({ setValidate, validate, requisicao }:Parametro) {
  return (
    <form>
      <input
        type="text"
        data-testid="search-artist-input"
        onChange={ (a) => setValidate(a.target.value) }
        value={ validate }
      />
      <button
        disabled={ validate.length < 2 }
        type="submit"
        data-testid="search-artist-button"
        onClick={ (a) => requisicao(a) }
      >
        Procurar

      </button>
    </form>
  );
}
