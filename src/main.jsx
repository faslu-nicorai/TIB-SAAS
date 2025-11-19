import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SuperTokensWrapper } from "supertokens-auth-react";
import { initSuperTokens } from "./config/supertokens";

initSuperTokens();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuperTokensWrapper>
      <App />
    </SuperTokensWrapper>
  </StrictMode>,
)
