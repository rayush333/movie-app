import React, {useState} from "react";
import { useFilters, useTable } from "react-table";
import '../assets/css/Table.css'

export default function Table({ columns, data, type }) {

const [filterInput, setFilterInput] = useState('');

const handleMovieFilterChange = e => {
  const value = e.target.value || undefined;
  setFilter("movieTitle", value); 
  setFilterInput(value);
};

const handleGenreFilterChange = e => {
  const value = e.target.value || undefined;
  setFilter("genre", value); 
  setFilterInput(value);
};

const handleUserFilterChange = e => {
  const value = e.target.value || undefined;
  setFilter("name", value); 
  setFilterInput(value);
};

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter
  } = useTable({
    columns,
    data
  },
  useFilters
  );

    
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
  <div>
    {(type === "Movies") ? <input value={filterInput} onChange={handleMovieFilterChange} placeholder={"Search movie title"}/> 
    : ((type === "Genres") ? <input value={filterInput} onChange={handleGenreFilterChange} placeholder={"Search genre"}/> 
    : <input value={filterInput} onChange={handleUserFilterChange} placeholder={"Search user name"}/>)}
  
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}