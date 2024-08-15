import { useState } from 'react';
import '../style.css';
import * as React from 'react';

interface TableProps {
  rowsData: {
    [index: string]: string,
  }[],
  categories: string[],
}

function Table(props: TableProps) {
  const { rowsData, categories } = props;
  const [rows, setRows] = useState(rowsData);

  // Handle search
  const [rowsToSearch, setRowsToSearch] = useState(rowsData);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredRows = rowsToSearch.filter((row) => {
      for(let i = 0; i < props.categories.length; i++) {
        if(row[categories[i]].toLowerCase().includes((e.target.value).toLowerCase())) {
          return true;
        }
      }
    })
    setRows(filteredRows);
    setPagination({
      ...pagination,
      start: 0,
      end: pagination.rowsPerPage
    });
  }

  // Handle filter columns
  const [filterOrder, setFilterOrder] = useState({
    order: '',
    numberOfClicks: 0
  });
  const filterBy = (filter: string) => {
    if(filterOrder.order !== filter) {
      // Explications
      // [...rows] - On va copier rows car .sort() modifie directement le tableau et on veut éviter un comportement inattendu
      // .sort() va nous permettre de trier le tableau dans l'ordre qu'on souhaite
      // On utilise la fonction localeCompare() pour comparer deux chaines de caractères 
      // localCompare renverra
      // -1 = plus grand que
      // 0 = egaux
      // 1 = plus petit que
      // Plus petit que veut dire qu'on est en train de trier par ordre alphabétique
      const sortedRows = [...rows].sort((a, b) => (a[filter].localeCompare(b[filter])));
      setFilterOrder({
        order: filter,
        numberOfClicks: 1
      })
      setRows(sortedRows);
    } else if(
      filterOrder.order === filter 
      && filterOrder.numberOfClicks % 2 !== 0
    ) {
      const sortedRows = [...rows].sort((a, b) => (b[filter].localeCompare(a[filter])));
      setFilterOrder({
        order: filter,
        numberOfClicks: filterOrder.numberOfClicks + 1
      })
      setRows(sortedRows);
    } else if(
      filterOrder.order === filter 
      && filterOrder.numberOfClicks % 2 === 0
    ) {
      const sortedRows = [...rows].sort((a, b) => (a[filter].localeCompare(b[filter])));
      setFilterOrder({
        order: filter,
        numberOfClicks: filterOrder.numberOfClicks + 1
      })
      setRows(sortedRows);
    }
  }

  // Filter columns elements
  function camelCaseToNormal(str: string) {
    return str.replace(/([A-Z])/g, ' $1').trim().toLowerCase().replace(/^./, match => match.toUpperCase());
  }
  const filterColumns = categories.map((category, index) => {
    return (
      <th
        key={index}
        onClick={() => filterBy(category)}
      >
        {camelCaseToNormal(category)}
      </th>
    )
  })

  // Handle pagination
  const defaultPaginationValue = 10;
  const [pagination, setPagination] = useState({
    rowsPerPage: defaultPaginationValue,
    start: 0,
    end: defaultPaginationValue,
  });
  const handleNextPage = () => {
    if(pagination.end === rows.length) {
      return;
    }
    if(rows.length - pagination.end < pagination.rowsPerPage) {
      return setPagination({
        ...pagination,
        start: pagination.start + pagination.rowsPerPage,
        end: rows.length
      })
    }
    setPagination({
      ...pagination,
      start: pagination.start + pagination.rowsPerPage,
      end: pagination.end + pagination.rowsPerPage
    })
  }
  const handlePrevPage = () => {
    if(pagination.start === 0) {
      return;
    }
    if(pagination.end - pagination.start < pagination.rowsPerPage) {
      return setPagination({
        ...pagination,
        start: pagination.start - pagination.rowsPerPage,
        end: rows.length - (pagination.end - pagination.start)
      })
    }
    setPagination({
      ...pagination,
      start: pagination.start - pagination.rowsPerPage,
      end: pagination.end - pagination.rowsPerPage
    })
  }

  // Display rows
  const elements = [];
  if(pagination.end > rows.length) {
    pagination.end = rows.length
  }
  for(let i = pagination.start; i < pagination.end; i++) {
    const element: JSX.Element[] = [];
    for(let j = 0; j < categories.length; j++) {
      if(j === 0) {
        element.push(
          <th key={j} scope="row">{rows[i][categories[j]]}</th>
        )
      } else {
        element.push(
          <td key={j}>{rows[i][categories[j]]}</td>
        )
      }
    }
    console.log(element)
    elements.push(
      <tr key={i}>{element}</tr>
    )
  }

  return (
    <div className="VC-table-container">
      <div className="configuration-table-items-container">
        <div>
          <span>Show </span>
          <select onChange={(e) => setPagination({ rowsPerPage: parseInt(e.target.value), start: 0, end: parseInt(e.target.value)})}>
            <option value={defaultPaginationValue}>{defaultPaginationValue}</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span> entries</span>
        </div>
        <input onFocus={() => setRowsToSearch(rows)} onChange={handleSearch} type="text" placeholder="Search" />
      </div>
      {
        rows.length === 0 ? 
        <div className="VC-table-empty">This table is empty</div> :
        <table>
        <thead className="VC-table-thead">
          <tr>
            {filterColumns}
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
      }
      <div className="VC-pagination">
        {
          rows.length === 0 ?
          <span>Showing 0 to 0 of 0 entries</span> :
          <span>Showing {pagination.start + 1} to {pagination.end} of {rows.length} entries</span>
        }
        <span className="VC-pagination-buttons-container">
          <button onClick={handlePrevPage}>Prev</button>
          <button onClick={handleNextPage}>Next</button>
        </span>
      </div>
    </div>
  );
}

export default Table;
