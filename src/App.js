import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Locations from './pages/Locations'
import Auth from './components/Auth'
import Login from './components/Login'
import Footer from './components/Footer'
import RequestQuote from './pages/RequestQuote'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact'


export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Signup" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/requestQuote" element={<RequestQuote />} />
        </Routes>
      </Router>

      <Footer />

    </>
  )
}
