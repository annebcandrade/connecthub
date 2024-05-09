import { useEffect, useState } from "react";
import TableWithPagination from "./TableWithPagination";
import { Container } from "./styles"
import axios from 'axios';

function ViewCompanies()  {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get('https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies')
            .then(response => {
                setCompanies(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir este item?")) {
            try {
                await axios.delete(`https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`);
                alert('Item excluído com sucesso!');
                setCompanies(companies.filter(company => company.id !== id));
            } catch (error) {
                console.error('Erro ao excluir item:', error);
                alert('Erro ao excluir item. Verifique o console para mais detalhes.');
            }
        }
    };
  

    return(
        <Container>
        <h1>Visualizar Empresas Externas</h1>
       <p>Lista de empresas externas cadastradas na connect hub.</p>
       <TableWithPagination itemsPerPage={10} companies={companies}  onDelete={handleDelete} />
         </Container>
    )
    
    }
   

    export default ViewCompanies