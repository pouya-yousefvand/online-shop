import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './AuthContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
   <CartProvider>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </CartProvider>
  </AuthProvider>
)
