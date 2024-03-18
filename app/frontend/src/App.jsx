import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/products" element={ <Products /> } />
    </Routes>
  )
}

export default App;
