import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export class UserCard extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [], name:localStorage.getItem( 'name') };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/users/'+(this.state.name))
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default UserCard;