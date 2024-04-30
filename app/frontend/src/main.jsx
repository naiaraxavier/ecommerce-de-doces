import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import ProductsProvider from './context/ProductsProvider'
import ScrollProvider from './context/ScrollProvider';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ScrollProvider>
  </BrowserRouter>
)
