// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './featuers/components/dashboard/dashboard';
import NotFound from './featuers/components/notfound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> {/* This will catch any undefined routes */}
    </Routes>
  );
};

export default AppRoutes;
