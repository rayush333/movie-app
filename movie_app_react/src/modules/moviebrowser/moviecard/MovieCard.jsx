import React from 'react';
import EllipsisText from "react-ellipsis-text";
import ReactCardFlip from 'react-card-flip';
import movieImgDefault from 'assets/img/movieAltImg.png'

class MovieCard extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
     const {movie} = this.props;

     return (
        <div className="card-container">
            <div className="card-wrapper">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="0.3" flipSpeedBackToFront="0.3">
                    <div className="front">
                        <span className="rating">{movie.movieRating}</span>
                        <img className="movie-image" src={movie.movieImage || movieImgDefault} alt=""  onClick={this.handleClick}/>
                        <div className="card-footer">
                            <div>
                                <h4 className="movie-title">{movie.movieTitle}</h4>
                                <p className="duration-genre">{movie.movieDuration} - <EllipsisText text={movie.movieGenre} length={"25"}/> </p>
                                <a className="movie-trailer" target='_blank' href={movie.movieTrailerUrl} rel="noopener noreferrer">
                                    Watch Trailer
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="back" onClick={this.handleClick}>
                        <h4 className="summary">Summary</h4>
                        <p className="movie-desc">{movie.movieDescription}</p>
                    </div>

                </ReactCardFlip>
            </div>
        </div>
     );
  }
}
export default MovieCard;