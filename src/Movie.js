import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API = 'https://first-express-project.herokuapp.com/movies';

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [chosenMovie, setChosenMovie] = useState(['']);

  const choseMovie = (banana) => {
    fetch(`https://first-express-project.herokuapp.com/movies/${banana}`)
      .then((data) => data.json())

      .then((json) => {
        setChosenMovie(json);
        console.log('hello');
        console.log(json);
        console.log(chosenMovie);
      });
  };

  return (
    <div>
      <div>
        <Link to={`/`}>
          <div className='icon-container'>
            <div className='icon'>
              <i className='fas fa-chevron-circle-left'></i>
            </div>
          </div>
        </Link>
      </div>
      <form
        onSubmit={(event) => {
          choseMovie(movie);
          event.preventDefault();
        }}
      >
        <label>
          <input
            required
            type='text'
            value={movie}
            placeholder='Enter your movie'
            onChange={(event) => setMovie(event.target.value)}
          />
        </label>
        <button className='input-button' type='submit'>
          search
        </button>
      </form>
      {chosenMovie.length === 0 ? (
        <div>
          <p>
            Sorry, we couldn't find your movie. Please check your spelling or
            try another one.
          </p>
        </div>
      ) : (
        chosenMovie.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <h2>{item.release_year}</h2>
            <h2>{item.director}</h2>
            <h3>{item.duration}</h3>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
