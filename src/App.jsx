import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*This renders the login UI on the /auth route*/}
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyEmailPasswordPreBuiltUI])}

        <Route path="/" element={<LandingPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path='/login' element={<LoginPage />} />

        <Route path='/signup' element={<SignupPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
