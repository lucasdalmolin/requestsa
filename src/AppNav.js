import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


export const AppNav = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Navbar />} />
            </Routes>
        </BrowserRouter>
    )
}
