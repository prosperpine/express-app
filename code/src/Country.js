import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//const data = 'https://first-express-project.herokuapp.com/movies';

const API = 'https://first-express-project.herokuapp.com/movies';

export const Country = () => {
  const [movies, setMovies] = useState([]);
  const [country, setCountry] = useState(['']);
  const [chosen, setChosen] = useState(['']);

  const choseCountry = (country) => {
    fetch(`https://first-express-project.herokuapp.com/countries/${country}`)
      .then((data) => data.json())

      .then((json) => {
        setChosen(json);
      });
  };

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      });
  }, []);

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
          <h4>Find movies from a particular country.</h4>
          <form
            onSubmit={(event) => {
              choseCountry(country);
              event.preventDefault();
            }}
          >
            <label className='input-button' type='submit'>
              <input
                className='inputForm'
                required
                type='text'
                value={country}
                placeholder='ie France'
                onChange={(event) => setCountry(event.target.value)}
              />
            </label>
          </form>
        </div>
      </section>
      <div className='movieList'>
        {chosen.length === 0 ? (
          <div className='notFoundText'>
            <h4>
              Sorry, we couldn't find your country. Please check your spelling
              or try another one.
            </h4>
          </div>
        ) : (
          chosen.map((item) => (
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
