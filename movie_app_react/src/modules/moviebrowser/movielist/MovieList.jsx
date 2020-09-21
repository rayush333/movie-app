import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MovieCard from '../moviecard/MovieCard';

const styles = {
  movieColumn: {
    marginBottom: 20
  }
}
const MovieList = ({movies}) => {
   const movieColumns = movies.length > 0 && movies.map(movie => (
     <Col style={styles.movieColumn} key={movie._id} xs={12} sm={4} md={3} lg={3}>
       <MovieCard movie={movie} />
     </Col>
   ));

  return (
    <Row>
        {movieColumns}
    </Row>
  );
}

export default MovieList;