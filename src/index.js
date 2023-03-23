import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <Auth0Provider
    domain="dev-jm1d6q6duamk25tc.us.auth0.com"
    clientId="HW7eDlTn2ljUSAa2b1eOvC8IGBWZ0oEq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
  </React.StrictMode>
);

