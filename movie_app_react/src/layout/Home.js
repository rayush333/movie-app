import React, { Component } from "react";


class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <h1>Home</h1>
            <a href="/admin">Admin</a>
            <br/>
            <a href="/user">User</a>

            </div>
        );
    }

}

export default Home;
