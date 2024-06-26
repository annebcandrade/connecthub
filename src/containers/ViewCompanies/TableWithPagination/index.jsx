
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Colunas } from './styles';
import React from 'react';
import { checkLoggedIn } from '../../../utils/auth';

function TableWithPagination({  itemsPerPage, companies, onDelete,
   onEdit, editedCompanyId, onUpdate }) {

 

    TableWithPagination.propTypes = {
        itemsPerPage: PropTypes.number.isRequired,
        companies: PropTypes.array.isRequired,
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [companyName, setCompanyName] = useState('')
    const [collaboratorsCount, setCollaboratorsCount] = useState('')
   

    useEffect(() => {
      const isLoggedIn = checkLoggedIn();
      if (!isLoggedIn) {
          document.cookie = `redirectUrl=${window.location.href}; path=/`;
          window.location.href = '/login';
      }
  }, []);

    useEffect(() => {
      // Extrai o número da página da URL
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page');
    
      // Definicao da página atual com base no parâmetro da URL
      if (pageParam) {
        setCurrentPage(parseInt(pageParam));
      }
    
    
      // Define o número total de páginas com base no número de empresas e itens por página
      setTotalPages(Math.ceil(companies.length / itemsPerPage));
    }, [companies, itemsPerPage]);

  

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, companies.length);
    const currentItems = companies.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('page', page);
        window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
    };

    

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
      
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      }

      const handleDeleteClick = (id) => {
        onDelete(id);
    };

    const handleUpdateClick = (id) => {
      onUpdate(id, companyName, collaboratorsCount);
  };
  
 

  return (
    <Colunas>
      <table>
        <thead>
          <tr>
            <th>Data de Criação</th>
            <th>Nome da Empresa</th>
            <th>Quantidade de Funcionários</th>
            <th>Empresa Ativa</th>
            <th>Última Atualização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map(company => (
          <React.Fragment key={company.id}>
            <tr key={company.id}>
              <td>{formatDate(company.createdAt)}</td>
              <td>{company.companyName}</td>
              <td>{company.collaboratorsCount}</td>
              <td>{company.isActive ? 'Sim' : 'Não'}</td>
              <td>{formatDate(company.lastSubmit)}</td>
              <td>
              <button onClick={() => onEdit(company.id)}>Editar</button>
                <button onClick={() => handleDeleteClick(company.id)}>Excluir</button>
              </td>
            </tr>
            {editedCompanyId === company.id && (
              <tr>
                  <td colSpan="6">
                  <input placeholder='Nome' type="text" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    <input placeholder='Quantidade de Funcionàrios' type="text" name="collaboratorsCount" value={collaboratorsCount} onChange={(e) => setCollaboratorsCount(e.target.value)} />
                    <button onClick={() => handleUpdateClick(editedCompanyId)}>Atualizar</button>
                    <button onClick={() => onEdit(null)}>Cancelar</button>
                      </td>
                      </tr>
            )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </Colunas>
  );
}

TableWithPagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  companies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired, 
  onEdit: PropTypes.func.isRequired,
    editedCompanyId: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default TableWithPagination;