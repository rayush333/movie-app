import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import MovieCard from '../moviecard/MovieCard';
import Loader from "../../../components/Loader/LoaderComponent";

const styles = {
  movieColumn: {
    marginBottom: 40
  }
}
const MovieList = ({movies, isLoading}) => {
   const movieColumns = movies.length > 0 && movies.map(movie => (
     <Col style={styles.movieColumn} key={movie._id} xs={12} sm={4} md={3} lg={3}>
       <MovieCard movie={movie} />
     </Col>
   ));

  return (
      <Grid className="movies-grid">
         <Row className="movies-row">
           {movieColumns}
           <Loader isLoading={isLoading} />
         </Row>
      </Grid>
  );
}

export default MovieList;