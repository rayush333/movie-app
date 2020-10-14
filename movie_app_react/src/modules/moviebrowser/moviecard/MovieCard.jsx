import React, { Component } from "react";
import EllipsisText from "react-ellipsis-text";
import ReactCardFlip from 'react-card-flip';
import movieImgDefault from 'assets/img/movieAltImg.png'
import isUrl from 'is-url';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class MovieCard extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            isFlipped: false,
            addToWatchlist: { name: null, movieId: null },
            movies :[],
            usersCollection: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.watchlist = this.watchlist.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    watchlist(movieId) {
    const watchlist = this.state.addToWatchlist;
    watchlist.name = localStorage.getItem('name');
    watchlist.movieId = movieId;
    this.setState({
        addToWatchlist : watchlist
    })
    if (this.state.addToWatchlist.name == null) {
        console.log(this.state.addToWatchlist.name)
        alert("Please Login!");
        return <Redirect to="/login" />
    } else {
        axios.get('http://localhost:4000/api/users/'+(this.state.addToWatchlist.name))
            .then(res => {
                this.setState({ usersCollection: res.data });
                console.log(this.state.usersCollection[0].watchlist);
                if(this.state.usersCollection[0].watchlist.includes(this.state.addToWatchlist.movieId)) {
                        alert("Already added to Watchlist!")
                }
                else {
                    axios.post(`http://localhost:4000/api/users/watchlist`, watchlist)
                        .then(res => {
                            console.log(res.data)
                            alert("Successfully Added to Watchlist!")
                    })
                    .catch(error => {
                    console.log(error.response.data)
                });
        }
        }).catch(function (error) {
            console.log(error);
    })

    }}

    render() {
     const {movie} = this.props;

     return (
        <div className="card-container">
            <div className="card-wrapper">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="0.3" flipSpeedBackToFront="0.3">
                    <div className="front">
                        {!isNaN(movie.movieRating) &&
                            <span className="rating">{movie.movieRating}</span>
                        }
                        <img className="movie-image" src={isUrl(movie.movieImage) ? movie.movieImage : movieImgDefault} alt=""  onClick={this.handleClick}/>
                        <div className="card-footer">
                            <div>
                                <h4 className="movie-title">{movie.movieTitle}</h4>
                                <p className="duration-genre">{movie.movieDuration} - <EllipsisText text={movie.movieGenre} length={25}/> </p>
                                <a className="movie-trailer" target='_blank' href={ movie.movieTrailerUrl } rel="noopener noreferrer">
                                    Watch Trailer
                                </a>
                                <a className="add-to-watchlist" onClick={this.watchlist.bind(this,movie._id)}>Watchlist</a>
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