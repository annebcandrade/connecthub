import { useEffect, useState } from "react";
import TableWithPagination from "./TableWithPagination";
import { Container } from "./styles"
import axios from 'axios';



function ViewPartners()  {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners')
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
                await axios.delete(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`);
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
        <h1>Visualizar Parceiros</h1>
       <p>Lista de Parceiros cadastrados na connect hub.</p>
       <TableWithPagination itemsPerPage={10} companies={companies} onDelete={handleDelete} />
         </Container>
    )
    
    }
    
    export default ViewPartners