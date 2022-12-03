import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../../pages/cart'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router