import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.jsx";
import LoginLayout from "layouts/Login.jsx";
import UserLayout from "layouts/User.jsx";
import AuthenticatedComponent from "components/Auth/Authenticated.jsx";
import PrivateRoute from "components/Auth/PrivateRoute.jsx";




class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact render={props => <LoginLayout {...props} />} />
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                        <Route path="/user" render={props => <UserLayout {...props} />} />
                    {/* <PrivateRoute path="/admin" component={AdminLayout}></PrivateRoute>
                    <PrivateRoute path="/user" component={UserLayout}></PrivateRoute> */}

                    {/* <AuthenticatedComponent>
                        <Route path="/admin" render={props => <AdminLayout {...props} />} />
                        <Route path="/user" render={props => <UserLayout {...props} />} />
                    </AuthenticatedComponent> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
