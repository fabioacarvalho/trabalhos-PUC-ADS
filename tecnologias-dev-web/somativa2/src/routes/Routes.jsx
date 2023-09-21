import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home.jsx'
import { Login } from '../pages/Login.jsx'
import { Cadastro } from '../pages/Cadastro.jsx'
import { NotFound } from '../pages/NotFound.jsx'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/signup' element={<Cadastro />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}