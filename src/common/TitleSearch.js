import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TitleSearch = ({ onSeachClick }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const handleInputChange = event => setMovieTitle(event.target.value);
  const handleOnSubmit = event => {
    event.preventDefault();
    onSeachClick(movieTitle);
  };

  return (
    <div className="input-group-lg">
      <Form onSubmit={handleOnSubmit}>
        <InputGroup>
          <input
            type="search"
            className="form-control searchInput"
            onChange={handleInputChange}
            placeholder="Search for a movie by it's title"
            id="movie-search-input"
          />
          <InputGroupAddon addonType="append">
            <Button className="searchButton" type="submit" color="primary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  );
};

export default TitleSearch;
