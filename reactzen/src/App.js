import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './featuers/components/dashboard/dashboard';
import NotFound from './featuers/components/notfound';
import AppRoutes from './App.routes';

function App() {
  return (
    <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
  );
}

export default App;
