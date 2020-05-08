import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API = 'https://first-express-project.herokuapp.com/movies';

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [chosenMovie, setChosenMovie] = useState(['']);

  const choseMovie = (movie) => {
    fetch(`https://first-express-project.herokuapp.com/movies/${movie}`)
      .then((data) => data.json())

      .then((json) => {
        setChosenMovie(json);
      });
  };

  return (
    <main>
      <section className='welcome genre'>
        <div>
          <Link to={`/`}>
            <div className='icon-container'>
              <div className='icon'>
                <i className='fas fa-chevron-circle-left'></i>
              </div>
            </div>
          </Link>
        </div>
        <div className='inputContainer'>
          <h4>Enter your favourite movie,</h4>
          <h5>ie The Irishman, Chocolate, The Island</h5>
          <form
            onSubmit={(event) => {
              choseMovie(movie);
              event.preventDefault();
            }}
          >
            <label className='input-button' type='submit'>
              <input
                className='inputForm'
                required
                type='text'
                value={movie}
                placeholder='ie The Irishman'
                onChange={(event) => setMovie(event.target.value)}
              />
            </label>
          </form>
        </div>
      </section>
      <div className='movieList'>
        {chosenMovie.length === 0 ? (
          <div>
            {' '}
            className='notFoundText'
            <h4>
              Sorry, we couldn't find your movie. Please check your spelling or
              try another one.
            </h4>
          </div>
        ) : (
          chosenMovie.map((item) => (
            <div>
              <h1>{item.title}</h1>
              <h2>{item.release_year}</h2>
              <h2>{item.director}</h2>
              <h2>{item.duration}</h2>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
};
