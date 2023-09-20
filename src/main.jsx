import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FeaturedProductProvider } from './context/FeaturedProductProvider.jsx'
import { ProductsProvider } from './context/ProductsProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <FeaturedProductProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </FeaturedProductProvider>
  </Auth0Provider>
)
