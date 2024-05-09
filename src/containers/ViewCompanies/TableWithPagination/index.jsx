
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Colunas } from './styles';

function TableWithPagination({  itemsPerPage, companies }) {

    TableWithPagination.propTypes = {
        itemsPerPage: PropTypes.number.isRequired,
        companies: PropTypes.array.isRequired,
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(companies.length / itemsPerPage));
    }, [companies, itemsPerPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, companies.length);
    const currentItems = companies.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
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
            <tr key={company.id}>
              <td>{formatDate(company.createdAt)}</td>
              <td>{company.companyName}</td>
              <td>{company.collaboratorsCount}</td>
              <td>{company.isActive ? 'Sim' : 'Não'}</td>
              <td>{formatDate(company.lastSubmit)}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
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

export default TableWithPagination;