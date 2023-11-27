import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Auth from './components/Auth'
import Login from './components/Login'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Auth />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>

      <Footer />

    </>
  )
}
