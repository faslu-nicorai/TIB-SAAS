import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*This renders the login UI on the /auth route*/}
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI])}

        <Route path="/" element={<LandingPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path='/login' element={<LoginPage />} />

        <Route path='/signup' element={<SignupPage />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <SessionAuth>
              <div className="flex h-screen w-full items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold">Dashboard (Protected)</h1>
              </div>
            </SessionAuth>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
