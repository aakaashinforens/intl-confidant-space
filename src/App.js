import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import VerificationPage from './pages/VerificationPage';
import CommunityPage from './pages/CommunityPage';
import CommunitiesList from './pages/CommunitiesList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerificationPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/communities" element={<CommunitiesList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
