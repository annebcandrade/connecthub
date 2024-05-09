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

    return(
        <Container>
        <h1>Visualizar Parceiros</h1>
       <p>Lista de Parceiros cadastrados na connect hub.</p>
       <TableWithPagination itemsPerPage={10} companies={companies} />
         </Container>
    )
    
    }
    
    export default ViewPartners