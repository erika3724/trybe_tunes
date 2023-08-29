import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </main>
  );
}

export default App;
