import Logo from '../../assets/Logo.png'
import  { Link } from 'react-router-dom'

import { Container, Menu, Li } from './styles'

function Header() {

    return(
      <Container>
        <img src={Logo} alt='logo-connect'
            />
        <Menu>
              <Li>
                <Link to="/Home">Home</Link>
            </Li>

            <Li>
                <Link to="/RegisterPartners">Cadastrar Parceiros</Link>
            </Li>
            <Li>
                <Link to="/ViewPartners">Ver Parceiros</Link>
            </Li>
            <Li>
                <Link to="/RegisterCompanies">Cadastrar Empresas</Link>
            </Li>
            <Li>
                <Link to="/ViewCompanies">Ver Empresas</Link>
            </Li>
            <Li>
                <Link to="/Login">Sair</Link>
            </Li>
                </Menu>
            </Container>
    )
}

export default Header 