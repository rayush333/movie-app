import React, { Component } from "react";
import { Route, Switch ,Link, matchPath } from "react-router-dom";
import Footer from "components/Footer/Footer";
import MovieBrowser from "modules/moviebrowser/MovieBrowserContainer";
import routes from "routes.js";
import image from "assets/img/sidebar-3.jpg";
import logo from "assets/img/movielogo.png";
import {Navbar} from "react-bootstrap";
const axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: false,
      fixedClasses: "dropdown show-dropdown open"
    };
    console.log("props",this.props)
    this.getGenereFromMongo = this.getGenereFromMongo.bind(this);
  }


  async getGenereFromMongo() {
    const result = await axios(
      'http://localhost:4000/api/genres')
      .then(response => {
        this.setState({ genres: response.data });
        console.log(this.state.genres);
      })
  };
  componentDidMount(){
    this.getGenereFromMongo();
  }

  getRoutes = routes => {
    return routes.admin.mainroutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div
          id="sidebar"
          className="sidebar">
             <div className="logo">
          <a
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            className="simple-text logo-normal"
          >
            WildCards Movies
          </a>
        </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className={matchPath(this.props.location.pathname, { path: '/' }) ? 'active' : ''}>
                <Link to="/">Dashboard</Link>
              </li >
              {this.state.genres && this.state.genres.map((prop, key) => {
              return (  <li key={key} className={matchPath(this.props.location.pathname, { path: `/movie/${prop.genre}` }) ? 'active' : ''} > <Link  to={`/movie/${prop.genre}`} >{prop.genre}</Link></li>);  
              })}
            </ul>
          </div>
        </div>
        {/* <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/> */}
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Navbar fluid>
             <p className="home-login"><a href="/login">Login</a></p>
          </Navbar>
          <Switch>{this.getRoutes(routes)}</Switch>
          <MovieBrowser/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
