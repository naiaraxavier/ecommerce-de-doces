import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import ScrollProvider from './context/ScrollProvider';
import ProductsProvider from './context/ProductsProvider'

function App() {

  return (
    <ScrollProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </ProductsProvider>
    </ScrollProvider>
  )
}

export default App;
