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
  

    return(
        <Container>
        <h1>Visualizar Empresas Externas</h1>
       <p>Lista de empresas externas cadastradas na connect hub.</p>
       <TableWithPagination itemsPerPage={10} companies={companies} />
         </Container>
    )
    
    }
    
    export default ViewCompanies