import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../service/firebase';

import './Login.css'

export const Login = () => {
    const [emailCurrent, setEmailCurrent] = useState('');
    const [passwordCurrent, setPasswordCurrent] = useState('');
    const [error, setError] = useState('')
    const [inLogin, setInLogin] = useState(false)
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            if(!emailCurrent || !passwordCurrent){
                return window.alert('Por favor insira e-mail e senha para continuar.')
            }

            setInLogin(true)

            setTimeout(async () => {
                await firebase.auth().signInWithEmailAndPassword(emailCurrent, passwordCurrent)
                .then(resp => {
                    console.log(resp)
                    navigate('/home', { state: resp.user.uid})
                })
                .catch((e) => {
                    setInLogin(false)
                    setError('Usuário ou senha inválidos.')
                })
            }, 1500)
        } catch (error) {
            console.log(error)
        }
    };

    // const signInMy = async () => {

    //     if(!emailCurrent || !passwordCurrent){
    //         return window.alert('Por favor insira e-mail e senha para continuar.')
    //     }

    //     await setInLogin(true)

    //     setTimeout(async () => {
    //         await firebase.firestore().collection('usuario').get()
    //             .then(response => {
    //                 response.forEach(item => {
    //                     if(item.data().email == emailCurrent && item.data().password == passwordCurrent) {
    //                         navigate('/home', {
    //                             state: item.data()
    //                         });
    //                     } else {
    //                         setInLogin(false)
    //                         setError('Usuário ou senha inválidos.')
    //                     }
                        
    //                 });
    //             })
    //     }, 1500);

    // };

    return (
        <div id="container">
            {!inLogin ? (
                <>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label className='form-label'>E-mail:</label>
                        <input type="email" className='form-control' placeholder='fulano@hotmail.com' onChange={e => setEmailCurrent(e.target.value)}/>
                        <label className='form-label mt-2'>Senha:</label>
                        <input type="password" className='form-control' placeholder='Digite sua senha' onChange={e => setPasswordCurrent(e.target.value)}/>
                    </div>

                    <div id='btns'>
                        <button className='btn btn-success mt-2' onClick={signIn}>Acessar</button>
                        <Link to="signup" className='btn btn-primary mt-2' style={{ marginLeft: 10 }}>Cadastrar</Link>
                    </div>
                    <p className='mt-2' style={{color: 'red'}}>{error}</p>
                </>
            ) : (
                <>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className='mt-2 text-secondary'>Acessando...</p>
                </>
            )
            }
           
            <footer style={{ marginTop: 30 }}>
                <strong>Developed by: </strong>Fábio Carvalho.
            </footer>

        </div>
    )
}