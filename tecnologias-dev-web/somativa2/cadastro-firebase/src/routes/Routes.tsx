import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home.tsx'
import { Login } from '../pages/Login.tsx'
import { Cadastro } from '../pages/Cadastro.tsx'
import { NotFound } from '../pages/NotFound.tsx'

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