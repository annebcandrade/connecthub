import { useState } from "react";
import { Container } from "./styles"

function RegisterCompanies()  {

    const [isActive, setIsActive] = useState(false); 

    const handleIsActiveChange = (e) => {
        setIsActive(e.target.value === 'true'); 
    };

    return(
        <Container>
        <h1>Cadastrar Empresas</h1>
        <p>Preencha as informações da nova Empresa Externa Connect Hub:</p>
        <p>Insira o Nome da Empresa:</p>
        <input />
        <p>Informe quantos colaboradores tem na empresa:</p>
        <input />
        <p>A empresa está ativa?</p>
        <select value={isActive} onChange={handleIsActiveChange}>
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                </select>
        <button>Cadastrar</button>
         </Container>
    )
    
    }
    
    export default RegisterCompanies