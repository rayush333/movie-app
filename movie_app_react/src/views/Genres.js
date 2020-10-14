import React, { useState, useEffect, useMemo } from "react";
import Table from "./Table";

function Genres() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:4000/api/genres")
    .then(result => result.json())
    .then(data => (console.log(data),setData(data))
    )
  }, []);


  const columns = useMemo(
    () => [
      {
        Header: "List of Genres",
        //  columns
        columns: [
          {
            Header: "List",
            accessor: "genre"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className='container'>
        <Table columns={columns} data={data} type="Genres"/>
    </div>
  );
}

export default Genres;