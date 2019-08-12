import React from 'react';
import { CardDeck, Row, Col } from 'reactstrap';
import MovieCard from './MovieCard';

const MovieCardGrid = ({ movies = [], onRateMovieClick }) => {
  // sort comparer function
  const sortByYear = (a, b) => a.Year - b.Year;

  // sort the movies by ascending release year
  const sortedMovies = movies.sort(sortByYear);

  // generate the card ui layout with 3 cards per row
  const getMovieList = () => {
    const sortedMovieItems = sortedMovies.map(movie => (
      <Col key={movie.imdbID}>
        <MovieCard movie={movie} onRateMovieClick={onRateMovieClick} />
      </Col>
    ));

    const maxMoviesItemsPerRow = 3;
    const totalRows = Math.ceil(sortedMovieItems.length / maxMoviesItemsPerRow);
    const rows = [];

    let lastIndex = 0;

    for (let counter = 0; counter < totalRows; counter++) {
      const groupedMovieItems = sortedMovieItems.slice(
        lastIndex,
        lastIndex + maxMoviesItemsPerRow
      );

      rows.push(<Row key={`row${counter}`}>{groupedMovieItems}</Row>);

      lastIndex = lastIndex + maxMoviesItemsPerRow;
    }

    return rows;
  };

  const movieList = getMovieList();

  return <CardDeck>{movieList}</CardDeck>;
};

export default MovieCardGrid;
