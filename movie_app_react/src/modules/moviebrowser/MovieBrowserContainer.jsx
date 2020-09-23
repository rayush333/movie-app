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
   this.getGenereFromMongo = this.getGenereFromMongo.bind(this);
  }
  async getMoviesFromMongo()  {
      await axios(
      'http://localhost:4000/api/movies/')
      .then(response => {
        this.setState({ movies: response.data })
    })
  };

    async getGenereFromMongo()  {
        const result = await axios(
            'http://localhost:4000/api/genres')
            .then(response => {
                this.setState({ genres: response.data });
            })
    };

    componentDidMount() {
        this.getMoviesFromMongo();
        this.getGenereFromMongo();
    }

    async getMoviesFromGenre(genre)  {
        await axios(
            'http://localhost:4000/api/movies/'+genre)
            .then(response => {
                this.setState({ movies: response.data })
            })
    };

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