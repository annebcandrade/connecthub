import { Container } from './styles'
import Logo from '../../assets/Logo.png'
import { useState } from 'react';

function Login()  {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (username === 'user' && password === 'senha123') {
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
    <button onClick={handleLogin}>Entrar
    </button>
    </Container>
)

}



export default Login