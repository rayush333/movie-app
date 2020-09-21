import React from "react";
import {Grid, Row} from "react-bootstrap";
import MovieList from './movielist/MovieList';
const axios = require('axios');

class MovieBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
     movies: []
   };
   this.getMoviesFromMongo = this.getMoviesFromMongo.bind(this);

  }
  async getMoviesFromMongo()  {
    const result = await axios(
      'http://localhost:4000/api/movies/')
      .then(response => {
        this.setState({ movies: response.data })
    })
  };
    
  componentDidMount() {
    this.getMoviesFromMongo();
  }

  render() {
   
    return (
      <div>
        <Grid className="movies-grid">
          <Row>
             <MovieList movies={this.state.movies} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MovieBrowser;