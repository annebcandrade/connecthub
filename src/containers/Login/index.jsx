import { Container } from './styles'
import Logo from '../../assets/Logo.png'
import { useState } from 'react';

function Login()  {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username === 'person' && password === 'senha123') {
            if (keepLoggedIn) {
                document.cookie = `username=${username}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
            } else {
                localStorage.setItem('username', username);
            }
            window.location.href = '/Home';
        } else {
            alert('Nome de usuário ou senha incorretos');
        }
    };



return(
    <Container>
        <img src={Logo} alt='logo' />
    <h1>Login - Conect Hub</h1>
    <p>Controle de Gestão de Empresas e Parceiros</p>
    <h3>Insira seu Nome de Usuário:</h3>
    <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    <h3>Insira sua Senha:</h3>
    <input
     type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
     <input
                    type="checkbox"
                    checked={keepLoggedIn}
                    onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                />
                <label>Mantenha-me conectado</label>
    <button onClick={handleLogin}>Entrar
    </button>
    </Container>
)

}



export default Login