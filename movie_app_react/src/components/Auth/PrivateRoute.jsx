import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated && rest.role == Auth.role
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

  const Auth = {
    isAuthenticated: false,
    role:null,
    authenticate() {
        if(localStorage.getItem('token') != null){
            this.isAuthenticated = true;
            this.role = localStorage.getItem('role');
        }
      console.log("isAuthenticated",this.isAuthenticated)
    },
    signout(val) {
        this.isAuthenticated = val;
        this.role = null;      
        console.log("isAuthenticated",this.isAuthenticated);
        localStorage.clear();

    }
  }

  export {PrivateRoute,Auth};