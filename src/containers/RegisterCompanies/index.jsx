import { useState } from "react";
import { Container } from "./styles"
import axios from "axios";

function RegisterCompanies()  {

    const [companiesData, setCompaniesData] = useState({
        companyName: "",
        collaboratorsCount: "",
        isActive: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompaniesData({
            ...companiesData,
            [name]: value
        });
    };


    const handleSubmit = async () => {
        try {
            await axios.post('https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies', companiesData);
            alert('Empresa cadastrada com sucesso!');
            setCompaniesData({
                companyName: "",
                collaboratorsCount: "",
                isActive: false
            });
        } catch (error) {
            console.error('Erro ao cadastrar Empresa:', error);
            alert('Erro ao cadastrar Empresa. Tente novamente.');
        }
    };



    return(
        <Container>
        <h1>Cadastrar Empresas</h1>
        <p>Preencha as informações da nova Empresa Externa Connect Hub:</p>
        <p>Insira o Nome da Empresa:</p>
        <input
         type="text"
         name="companyName"
         value={companiesData.companyName}
         onChange={handleInputChange}
        />
        <p>Informe quantos colaboradores tem na empresa:</p>
        <input 
        type="number"
        name="collaboratorsCount"
        value={companiesData.collaboratorsCount}
        onChange={handleInputChange}
        />
        <p>A empresa está ativa?</p>
         <select
                value={companiesData.isActive}
                onChange={(e) => setCompaniesData({...companiesData, isActive: e.target.value === 'true'})}
            >
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
            </select>
        <button onClick={handleSubmit}>Cadastrar</button>
         </Container>
    )
    
    }
    
    export default RegisterCompanies