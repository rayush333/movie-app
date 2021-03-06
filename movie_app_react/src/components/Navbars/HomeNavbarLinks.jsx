
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HomeNavbarLinks extends Component {
  constructor(props) {
    super("123",props);
    console.log(props)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }
  login(){
  console.log("login");
  this.props.history.push('/login');
  localStorage.clear();
  }

  register(){
    console.log("register");
    this.props.history.push('/register');
    localStorage.clear();
  }
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
         {/* <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>*/}
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1}>
            Welcome
          </NavItem>

          <NavItem onClick={this.login}>
            Log In
          </NavItem>

          <NavItem onClick={this.register} >
            Sign Up
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HomeNavbarLinks;
