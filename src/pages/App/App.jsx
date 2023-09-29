import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Header from '../../components/Header/Header';
import { getUser } from '../../utilities/users-service';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className='App'>
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
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}