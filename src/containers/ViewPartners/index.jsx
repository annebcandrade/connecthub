import { useEffect, useState } from "react";
import TableWithPagination from "./TableWithPagination";
import { Container } from "./styles"
import axios from 'axios';



function ViewPartners()  {

    const [companies, setCompanies] = useState([]);
    const [editedCompanyId, setEditedCompanyId] = useState(null);

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

    const handleUpdate = async (id, name, urlDoc) => {
        
        
        try {
            const updatedData = {
                name,
                urlDoc,
            };
            const response = await axios.put(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`, updatedData);
            console.log('Resposta da atualização:', response.data);
            alert('Empresa atualizada com sucesso!');
            setEditedCompanyId(null);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar empresa:', error);
            alert('Erro ao atualizar empresa. Verifique o console para mais detalhes.');
        }
    };

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        const updatedCompanies = companies.map(company => {
            if (company.id === id) {
                return { ...company, [name]: value };
            }
            return company;
        });
        setCompanies(updatedCompanies);
    };


    return(
        <Container>
        <h1>Visualizar Parceiros</h1>
       <p>Lista de Parceiros cadastrados na connect hub.</p>
       <TableWithPagination itemsPerPage={10} companies={companies} 
       onDelete={handleDelete} 
       onEdit={(id) => setEditedCompanyId(id)}
       editedCompanyId={editedCompanyId}
       onInputChange={(e, id) => handleInputChange(e, id)}
       onUpdate={handleUpdate}/>
         </Container>
    )
    
    }
    
    export default ViewPartners