import React, { useState, useEffect, useMemo } from "react";
import Table from "./Table";

function Movies() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:4000/api/movies")
    .then(result => result.json())
    .then(data => (console.log(data),setData(data))
    )
  }, []);


  const columns = useMemo(
    () => [
      {
        Header: "List of Movies",
        //  columns
        columns: [
          {
            Header: "Movie Title",
            accessor: "movieTitle"
          },
          {
            Header: "Movie Genre",
            accessor: "movieGenre"
          },
          {
            Header: "Movie Duration",
            accessor: "movieDuration"
          },
          {
            Header: "Movie Rating",
            accessor: "movieRating"
          },
          {
            Header: "Movie Description",
            accessor: "movieDescription"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className='container'>
        <Table columns={columns} data={data} type="Movies" />
    </div>
  );
}

export default Movies;