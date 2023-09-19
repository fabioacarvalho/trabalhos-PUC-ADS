import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Cadastro = () => {

    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ born, setBorn ] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')

    const saveUser = () => {
        window.alert('Usuário cadastrado com sucesso')
    };

    return (
        <div id="container">
            <h1>Cadastrar</h1>
            <div className="mb-3">
                <label className='form-label'>Nome:</label>
                <input type="text" className='form-control' placeholder='Fulano' onChange={(e) => setName(e.target.value)}/>
                <label className='form-label'>Sobrenome:</label>
                <input type="text" className='form-control' placeholder='Silva' onChange={(e) => setLastName(e.target.value)}/>
                <label className='form-label'>Data de Nascimento:</label>
                <input type="date" className='form-control' onChange={(e) => setBorn(e.target.value)}/>
                <label className='form-label'>E-mail:</label>
                <input type="email" className='form-control' placeholder='fulano@hotmail.com' onChange={(e) => setEmail(e.target.value)}/>
                <label className='form-label mt-2'>Senha:</label>
                <input type="password" className='form-control' placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div id='btns'>
                
                <Link to="/" className='btn btn-danger mt-2'>Cancelar</Link>
                <button className='btn btn-primary mt-2' style={{ marginLeft: 10 }} onClick={saveUser}>Cadastrar</button>
            </div>

            <p>
                {name}
                {lastName}
                {born}
                {email}
                {password}
            </p>
            
        </div>
    )
}