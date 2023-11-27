import React from 'react'
import Header from './components/Header'
import Auth from './components/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth/>} />

          {/* <Route path="/about" element={} */}
        </Routes>
      </Router>





    </>
  )
}
