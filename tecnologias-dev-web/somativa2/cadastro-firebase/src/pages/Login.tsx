import { Link } from 'react-router-dom';

import './Login.css'

export const Login = () => {
    return (
        <div id="container">
            <h1>Login</h1>
            <div className="mb-3">
                <label className='form-label'>E-mail:</label>
                <input type="email" className='form-control' placeholder='fulano@hotmail.com'/>
                <label className='form-label mt-2'>Senha:</label>
                <input type="password" className='form-control' placeholder='Digite sua senha'/>
            </div>

            <div id='btns'>
                <Link to="home" className='btn btn-success mt-2'>Acessar</Link>
                <Link to="signup" className='btn btn-primary mt-2' style={{ marginLeft: 10 }}>Cadastrar</Link>
            </div>
        </div>
    )
}