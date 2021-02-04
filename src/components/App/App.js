import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Film from '../Film/Film';
import movieData from './movie-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      currentMovie: '',
      // {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}
    }
  }

  selectMovie = event => {
    this.setState({ currentMovie: event.target.id });
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          {/* {this.state.currentMovie && <Film />}
          <Movies movies={this.state.movies} /> */}
          <Film />
        </div>
      </>
    );
  }
}

export default App;
