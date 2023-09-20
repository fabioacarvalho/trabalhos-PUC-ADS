import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../service/firebase';

export const Cadastro = () => {
    const navigate = useNavigate();

    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ born, setBorn ] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')

    const saveUser = async () => {
        if(!name || !lastName || !born || !email || !password) {
            return window.alert('Todos os campos obrigatórios!');
        }

        const order = {
            name: name,
            lastName: lastName,
            born: born,
        }

        // Criando um user auth e relacionando uid com a base usuario
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (resp) => {
                await firebase.firestore().collection('usuario').doc(resp.user.uid).set(order)
                window.alert('Usuário cadastrado com sucesso.');
                // Como usuário já fica logado...
                navigate('/home');
            })

        // Método para inserir dados no firebase:
        // await firebase.firestore().collection('usuario').add(order);
        // window.alert('Usuário cadastrado com sucesso.');
        // navigate('/');
    };

    return (
        <div id="container">
            <h1>Cadastrar</h1>
            <div className="mb-3">
                <label className='form-label'>Nome:</label>
                <input type="text" className='form-control' placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
                <label className='form-label'>Sobrenome:</label>
                <input type="text" className='form-control' placeholder='Sobrenome' onChange={(e) => setLastName(e.target.value)}/>
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
            
        </div>
    )
}