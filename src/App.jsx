import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service.js';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <div className='App'>
      {
        user ? (
          <>
            <Header user={user} setUser={setUser} />
            <Routes>
              <Route path='/dashboard' element={<DashboardPage user={user} />} />
              <Route path='*' element={<Navigate to='/dashboard' replace />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <Header user={user} setUser={setUser} />
            <Routes>
              <Route path='/' element={<LandingPage setUser={setUser} />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
            <Footer />
          </>
        )
      }
    </div>
  );
}