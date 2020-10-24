import React, { Component } from "react";
import LoginNavbar from "components/Navbars/LoginNavbar";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/wildCards.png";
import RegisterForm from "../views/register/RegisterForm";

class Register extends Component {
    render() {
        return (
          <div className="wrapper">
            <LoginNavbar/>
            <RegisterForm {...this.props}
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <span>
                    "Lamborghini KJKJKKJ
                    <br />
                    Your HJJHJJHJHJ she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />

          </div>
        );
      }
}

export default Register;
