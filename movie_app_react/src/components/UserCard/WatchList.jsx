import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import MovieList from "modules/moviebrowser/movielist/MovieList";

import InfiniteScroll from 'react-infinite-scroll-component'

export class WatchList extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [], name:localStorage.getItem( 'name'), movies: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/users/'+(this.state.name))
            .then(res => {
                this.setState({ usersCollection: res.data });
                console.log(this.state.usersCollection[0].watchlist);
                        axios.get('http://localhost:4000/api/movies/watchlist/'+(this.state.usersCollection[0].watchlist))
                            .then(response => {
                                this.setState({ movies: response.data })
                                console.log(this.state.usersCollection[0].watchlist)
                                console.log(this.state.movies)
                                }).catch(function (error) {
                                    console.log(error);
                            })
                }).catch(function (error) {
                    console.log(error);
            })

    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
                  <div>
                      <InfiniteScroll className="infinite-scroll"
                          dataLength={this.state.movies.length}
                          next={this.fetchNextMovies}
                          hasMore={true}>
                             {this.state.movies.length == 0 && !this.state.isLoading &&
                                <div className="noresult">No Results Found</div>
                             }
                             <MovieList movies={this.state.movies} isLoading={this.state.isLoading} />
                    </InfiniteScroll>
                  </div>
        )
    }
}
export default WatchList;