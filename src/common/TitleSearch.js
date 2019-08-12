import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';

const TitleSearch = ({ onSeachClick }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const handleInputChange = event => setMovieTitle(event.target.value);

  return (
    <div className=" input-group-lg">
      <InputGroup>
        <input
          type="search"
          className="form-control"
          onChange={handleInputChange}
          placeholder="Search for a movie by it's title"
          id="movie-search-input"
        />
        <InputGroupAddon addonType="append">
          <Button
            type="button"
            onClick={() => onSeachClick(movieTitle)}
            color="primary"
          >
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default TitleSearch;
