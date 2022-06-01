import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Router } from 'react-router-dom';
import { SignUpPage } from './pages/signupPage';
import { Routes } from 'react-router-dom';
import { LoginPage } from './pages/loginPage';
import { RecoilRoot } from 'recoil';
import { TopPage } from './pages/topPage';
import { Page404 } from './pages/page404';
import { ProfilePage } from './pages/profilePage';
import { BookRegistrationPage } from './pages/bookRegistrationPage';
import { DetailPage } from './pages/detailPage';
import { EditReviewPage } from './pages/editReviewPage';
import { useGetStorageToken } from './hooks/useGetStorageToken';

const  App = () => {
  const token = useGetStorageToken()
  return (
    <RecoilRoot>
            <Routes>
              <Route path='/' element={<TopPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path='/new' element={<BookRegistrationPage />} />
              <Route path='/detail/:id' element={<DetailPage />} />
              <Route path='/edit/:id' element={<EditReviewPage/>} />
              <Route path='/*' element={<Page404/>} />
            </Routes>
    </RecoilRoot>  
  );
}

export default App;
