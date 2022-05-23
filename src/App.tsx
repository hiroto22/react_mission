import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { SignUpPage } from './pages/signupPage';
import { Routes } from 'react-router-dom';
import { LoginPage } from './pages/loginPage';
import { RecoilRoot } from 'recoil';
import { TopPage } from './pages/topPage';
import { Page404 } from './pages/page404';
import { Auth0Provider } from '@auth0/auth0-react';

const  App = () => {
  return (
    <RecoilRoot>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<TopPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path='/*' element={<Page404/>} />
            </Routes>
        </BrowserRouter>
    </RecoilRoot>  
  );
}

export default App;
