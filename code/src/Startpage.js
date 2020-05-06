import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const API = 'https://first-express-project.herokuapp.com/movies';

export const Startpage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      });
  }, []);

  return (
    <main>
      <div>
        <section className='welcome'>
          <h1>Welcome</h1>
          <h3>Looking for a movie?</h3>
          <h5>Search by</h5>
          <article className='searchField'>
            <div>
              <Link to={`/Genre/`}>
                <button>Genre</button>
              </Link>
            </div>
            <div>
              <Link to={`/Country/`}>
                <button>Country</button>
              </Link>
            </div>
            <div>
              <Link to={`/Movie/`}>
                <button>Specific movie</button>
              </Link>
            </div>
            <div>
              <Link to={`/Director/`}>
                <button>Director</button>
              </Link>
            </div>
            <div>
              <Link to={`/Actor/`}>
                <button>Actor</button>
              </Link>
            </div>
          </article>
        </section>
        <div className='movieList'>
          {movies.slice(0, 30).map((movie, index) => (
            <div className='movie' key={movie.id}>
              <div>
                <h3>{movie.title} </h3>
                <h5>Released {movie.release_year}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
