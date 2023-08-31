import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Search from './Components/Search';
import Layout from './Components/layout/Index';

function App() {
  return (
    <main>
      <Routes>
        <Route index path="/" element={ <Login /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="search" element={ <Search /> } />
          <Route path="album/:id" element={ <Search /> } />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
