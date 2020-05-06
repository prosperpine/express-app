import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Director = () => {
  const [director, setDirector] = useState(['']);
  const [chosenDirector, setChosenDirector] = useState(['']);

  const choseDirector = (director) => {
    fetch(`https://first-express-project.herokuapp.com/directors/${director}`)
      .then((data) => data.json())
      .then((json) => {
        setChosenDirector(json);
        console.log('hello');
        console.log(json);
        console.log(chosenDirector);
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
          <h4>Enter your favourite director.</h4>
          <form
            onSubmit={(event) => {
              choseDirector(director);
              event.preventDefault();
            }}
          >
            <label className='input-button' type='submit'>
              <input
                className='inputForm'
                required
                type='text'
                value={director}
                placeholder='ie Martin Scorsese'
                onChange={(event) => setDirector(event.target.value)}
              />
            </label>
          </form>
        </div>
      </section>
      <div className='movieList'>
        {chosenDirector.length === 0 ? (
          <div className='notFoundText'>
            <h4>
              Sorry, we couldn't find your director. Please check your spelling
              or try another one.
            </h4>
          </div>
        ) : (
          chosenDirector.map((item) => (
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
