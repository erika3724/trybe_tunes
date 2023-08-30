import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Search from './Components/Search';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </main>
  );
}

export default App;
