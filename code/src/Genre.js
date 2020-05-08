import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Genre = () => {
  const [genre, setGenre] = useState(['']);
  const [chosenGenre, setChosenGenre] = useState(['']);

  const choseGenre = (genre) => {
    fetch(`https://first-express-project.herokuapp.com/genres/${genre}`)
      .then((data) => data.json())

      .then((json) => {
        setChosenGenre(json);
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
          <h4>Enter your favourite genre,</h4>
          <h5>ie Dramas, Comedies, Sci-Fi, Action</h5>
          <form
            onSubmit={(event) => {
              choseGenre(genre);
              event.preventDefault();
            }}
          >
            <label className='input-button' type='submit'>
              <input
                className='inputForm'
                required
                type='text'
                value={genre}
                placeholder='ie Dramas'
                onChange={(event) => setGenre(event.target.value)}
              />
            </label>
          </form>
        </div>
      </section>
      <div className='movieList'>
        {chosenGenre.length === 0 ? (
          <div className='notFoundText'>
            <h4>
              Sorry, we couldn't find your genre. Please check your spelling or
              try another one.
            </h4>
          </div>
        ) : (
          chosenGenre.map((item) => (
            <div>
              <h3>{item.title}</h3>
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
