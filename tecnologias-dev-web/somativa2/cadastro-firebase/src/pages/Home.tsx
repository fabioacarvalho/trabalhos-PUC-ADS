import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
import firebase from '../service/firebase';

export const Home = () => {
    const { state } = useLocation();
    const [email, setEmail] = useState('');
    const [Data, setData] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    const logOut = async () => {
        // Fazer logoff do usuário autenticado
        await firebase.auth().signOut().then(() => {
            // Logoff bem-sucedido
            console.log("Usuário desconectado");
        }).catch((error) => {
            // Ocorreu um erro ao fazer o logoff
            console.error("Erro ao fazer logoff: ", error);
        });
  
    };

    const getData = async (uid: string) => {
        await firebase.firestore().collection('usuario').doc(uid).get()
            .then(resp => {
                setData(resp.data())
                setLoading(false)
            })
    };

    const hasUserAuth = async () => {
        await firebase.auth().onAuthStateChanged(async (usuario) => {
            if(usuario) {
                const uid = usuario.uid
                setEmail(usuario.email)
                getData(uid);
            } else {
                navigate('/')
            }
        });
    };



    useEffect(() => {
        hasUserAuth();
    });

    return (
        <div>
            

            {!loading ? (
                <>
                    <h1>Bem vindo</h1>
                        <h2 className='text-capitalize'>{Data.name} {Data.lastName}</h2>
                        
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Acessar meus dados</button>
                        <button className="btn btn-danger" style={{ marginLeft: 10 }} type="button" onClick={logOut}>Sair</button>
                        
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Seu perfil</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p className="fw-bold text-start">Nome:</p>
                            <p className="text-capitalize text-start">{Data.name}</p>
                            <p className="fw-bold text-start">Sobrenome:</p>
                            <p className="text-capitalize text-start">{Data.lastName}</p>
                            <p className="fw-bold text-start">Data de Nascimento:</p>
                            <p className="text-start">{Data.born}</p>
                            <p className="fw-bold text-start">E-mail:</p>
                            <p className="text-start">{email}</p>
                        </div>
                        </div>
                </>
            ) : (
                <>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className='mt-2 text-secondary'>Carregando...</p>
                </>
            )}

            <footer>
                <strong>Developed by: </strong>Fábio Carvalho.
            </footer>
        </div>
    )
}