import { useState } from "react";
import { Container } from "./styles"



function RegisterPartners()  {

    const [isActive, setIsActive] = useState(false); 

    const handleIsActiveChange = (e) => {
        setIsActive(e.target.value === 'true'); 
    };

    return(
        <Container>
       <h1>Cadastrar Parceiros</h1>
       <p>Preencha as informações do novo Parceiro Connect Hub:</p>
       <p>Insira o Nome do Parceiro:</p>
       <input />
       <p>Insira a URL do Parceiro:</p>
       <input />
       <p>Insira o repositorio Git:</p>
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
    
    export default RegisterPartners