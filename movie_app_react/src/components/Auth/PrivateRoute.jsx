import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";



class PrivateRoute extends Component {

    constructor(props) {
        super(props);
        console.log("private routes", this.props)
        this.state = {};
    }

    componentDidMount() {
        this.setState({ authenicated: false })

    }

    render() {
        return (
            <div>
                {this.state.authenicated ? <Route path={this.props.path} component={this.props.component} exact={true}></Route>
                    : <Redirect to="/login"></Redirect>}
            </div>
        );
    }

}

export default PrivateRoute;

