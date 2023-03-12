import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { MyFeedComponent } from './pages/MyFeed/MyFeed.component';
import { NewsComponent } from './pages/News/News.component';
import { NotFoundComponent } from './pages/NotFound/NotFound.component';

import './App.css';
import { MessagesComponent } from './pages/Messages/Messages.component';
import { AppLayout } from './shared/components/Layout/AppLayout.component';
import { LoginComponent } from './pages/Login/Login.component';
import { useAppSelector } from './hooks/redux-hooks';
import { RoadMapComponent } from './pages/RoadMap/RoadMap.component';

function App() {
 const navigate = useNavigate();

 const authState = useAppSelector((state) => state.auth);

 useEffect(() => {
  if (!authState.isAuth) {
   navigate('/login');
  } else {
   navigate('/');
  }
  return () => {};
 }, [authState.isAuth]);

 return (
  <Routes>
   <Route path="/" element={<Navigate to="/feed" replace />} />
   <Route
    path="/feed"
    element={
     <AppLayout>
      <MyFeedComponent />
     </AppLayout>
    }
   />
   <Route
    path="/news"
    element={
     <AppLayout>
      <NewsComponent />
     </AppLayout>
    }
   />
   <Route
    path="/messages"
    element={
     <AppLayout>
      <MessagesComponent />
     </AppLayout>
    }
   />

   <Route
    path="/roadmap"
    element={
     <AppLayout>
      <RoadMapComponent />
     </AppLayout>
    }
   />

   <Route path="/login" element={<LoginComponent />} />
   <Route path="*" element={<NotFoundComponent />} />
  </Routes>
 );
}

export default App;
