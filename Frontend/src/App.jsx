import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Expense from './pages/Expense';
import Income from './pages/Income';
import Setting from './pages/Setting';
import Profile from './pages/profile';
import Notification from './pages/Notification';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/expense' element={<Expense/>}/>
        <Route path='/income' element={<Income/>}/>
        <Route path='/settings' element={<Setting/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/notifications' element={<Notification/>}/>
      </Routes>
    </>
  )
}

export default App
