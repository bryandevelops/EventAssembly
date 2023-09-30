import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Header from '../../components/Header/Header';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { getUser } from '../../utilities/users-service';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <div className='App'>
      {user ? (
        <>
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='*' element={<Navigate to='/orders' replace />} />
          </Routes>
        </>
      ) : (
        <>
          <Header user={user} setUser={setUser} />
          <LandingPage setUser={setUser} />
          <Footer />
        </>
      )}
    </div>
  );
}