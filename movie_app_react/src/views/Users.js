import React, { useState, useEffect, useMemo } from "react";
import Table from "./Table";

function Users() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:4000/api/users")
    .then(result => result.json())
    .then(data => (console.log(data),setData(data))
    )
  }, []);


  const columns = useMemo(
    () => [
      {
        Header: "List of Users",
        
        columns: [
          {
            Header: "User Name",
            accessor: "name"
          },
          {
            Header: "User EmailId",
            accessor: "email"
          },
          {
            Header: "User Password",
            accessor: "password"
          },
          {
            Header: "User Role",
            accessor: "role"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className='container'>
        <Table columns={columns} data={data} type="Users"/>
    </div>
  );
}

export default Users;