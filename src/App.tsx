import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhotoContextProvider } from './Context/PhotoContext';
import './App.css';
import Homepage from './Homepage/Homepage';
import PhotoPage from './PhotoPage/PhotoPage';

function App() {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/photo/:id" element={<PhotoPage />} />
            <Route index element={<Homepage />} />
            <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;
