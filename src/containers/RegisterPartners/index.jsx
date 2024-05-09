import { useState } from "react";
import { Container } from "./styles"
import axios from "axios";



function RegisterPartners()  {

    const [partnerData, setPartnerData] = useState({
        name: "",
        urlDoc: "",
        repositoryGit: "",
        isActive: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPartnerData({
            ...partnerData,
            [name]: value
        });
    };


    const handleSubmit = async () => {
        try {
            await axios.post('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners', partnerData);
            alert('Parceiro cadastrado com sucesso!');
            setPartnerData({
                name: "",
                urlDoc: "",
                repositoryGit: "",
                isActive: false
            });
        } catch (error) {
            console.error('Erro ao cadastrar parceiro:', error);
            alert('Erro ao cadastrar parceiro. Verifique o console para mais detalhes.');
        }
    };

    return(
        <Container>
       <h1>Cadastrar Parceiros</h1>
       <p>Preencha as informações do novo Parceiro Connect Hub:</p>
       <p>Insira o Nome do Parceiro:</p>
       <input 
       type="text"
       name="name"
       value={partnerData.name}
       onChange={handleInputChange}
       />
       <p>Insira a URL do Parceiro:</p>
       <input
       type="text"
       name="urlDoc"
       value={partnerData.urlDoc}
       onChange={handleInputChange}
       />
       <p>Insira o repositorio Git:</p>
       <input 
        type="text"
        name="repositoryGit"
        value={partnerData.repositoryGit}
        onChange={handleInputChange}
       
       />
       <p>A empresa está ativa?</p>
       <select
                value={partnerData.isActive}
                onChange={(e) => setPartnerData({...partnerData, isActive: e.target.value === 'true'})}
            >
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
            </select>
       <button onClick={handleSubmit}>Cadastrar</button>
        </Container>
    )
    
    }
    
    export default RegisterPartners